import { useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { Tweet } from "../services/tweets.list";
import { AUTH_TOKEN_KEY } from "../../constants";

export const useTweetsWebSocket = () => {
  const wsRef = useRef<WebSocket | null>(null);
  const queryClient = useQueryClient();
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  useEffect(() => {
    if (!token) return;

    const ws = new WebSocket(
      `ws://mock.arianalabs.io/ws/tweet/feed/?token=${token}`
    );
    wsRef.current = ws;

    ws.onopen = () => console.log("WebSocket connected to tweet feed");

    ws.onmessage = (event) => {
      try {
        const data: Tweet = JSON.parse(event.data);

        // Prepend new tweet to React Query cache
        queryClient.setQueryData(["tweets"], (oldData: any) => {
          if (!oldData) {
            return {
              pages: [{ results: [data], next: null }],
              pageParams: [undefined],
            };
          }

          const newPages = [...oldData.pages];
          newPages[0] = {
            ...newPages[0],
            results: [data, ...newPages[0].results],
          };

          return { ...oldData, pages: newPages };
        });
      } catch (err) {
        console.error("Failed to parse websocket tweet:", err);
      }
    };

    ws.onclose = () => console.log("WebSocket disconnected");
    ws.onerror = (err) => console.error("WebSocket error:", err);

    return () => ws.close();
  }, [queryClient, token]);
};
