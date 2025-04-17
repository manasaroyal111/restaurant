

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function useAgentId() {
  const location = useLocation();
  const [agentId, setAgentId] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const initialAgentId = urlParams.get("agentid");

    if (initialAgentId) {
      setAgentId(initialAgentId);
      localStorage.setItem("agentId", initialAgentId);
    }
  }, [location.search]); // Runs when URL changes

  const getUrlWithAgentId = (path) => {
    const storedAgentId = localStorage.getItem("agentId");

    if (storedAgentId && location.search.includes("agentid")) {
      const separator = path.includes("?") ? "&" : "?";
      return `${path}${separator}agentid=${storedAgentId}`;
    }
    
    return path; // Don't add `agentid` if it's not needed
  };

  return { getUrlWithAgentId };
}