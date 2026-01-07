import { useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { GetTweetsParams, Tweet } from "../services/tweets.list";
import { AUTH_TOKEN_KEY } from "../../constants";

export const useTweetsWebSocket = (params: GetTweetsParams = {}) => {
  const wsRef = useRef<WebSocket | null>(null);
  const queryClient = useQueryClient();
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  useEffect(() => {
    if (!token || wsRef.current?.readyState === WebSocket.OPEN) return;

    console.log("🟢 Attempting connection...");
    const ws = new WebSocket(
      `wss://mock.arianalabs.io/ws/tweet/feed/?token=${token}`
    );
    wsRef.current = ws;

    ws.onopen = () => console.log("✅ WebSocket Connected");

    ws.onmessage = (event) => {
      try {
        const data: Tweet = JSON.parse(event.data);
        console.log("📩 New Tweet:", data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        queryClient.setQueryData(["tweets", params], (oldData: any) => {
          console.log(
            "🚀 ~ tweetsWS.ts:30 ~ useTweetsWebSocket ~ oldData:",
            oldData
          );
          if (!oldData) return oldData;

          // Check if tweet already exists in the first page to avoid duplicates
          const alreadyExists = oldData.pages[0].results.some(
            (t: Tweet) => t.id === data.id
          );

          if (alreadyExists) return oldData;

          const newPages = [...oldData.pages];
          newPages[0] = {
            ...newPages[0],
            results: [data, ...newPages[0].results],
          };

          return { ...oldData, pages: newPages };
        });
      } catch (err) {
        console.error("❌ Parse Error:", err);
      }
    };

    ws.onclose = (e) => {
      console.log(`🔴 Connection Closed (Code: ${e.code})`);
      wsRef.current = null;
    };

    ws.onerror = (err) => console.error("⚠️ WebSocket Error:", err);

    return () => {
      if (
        ws.readyState === WebSocket.OPEN ||
        ws.readyState === WebSocket.CONNECTING
      ) {
        ws.close();
      }
    };
  }, [token, queryClient, params]);
};
