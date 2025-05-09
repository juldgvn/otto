/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  const SupabaseDataLinks_1: ResourceRequest = {
    id: "xNS_z-e37-y13arzt_Khy",
    name: "Supabase Data / Links",
    url: "https://hsohytgpflijgkjlnxja.supabase.co/rest/v1/links?select=*",
    method: "get",
    headers: [
      { name: "apikey", value: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhzb2h5dGdwZmxpamdramxueGphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MzQ1MjU0MywiZXhwIjoyMDU5MDI4NTQzfQ.Wcu1w5cVJaugBefDL2ePU3xjS1nai_ioJAiFnw-SkkA" },
      { name: "Authorization", value: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhzb2h5dGdwZmxpamdramxueGphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MzQ1MjU0MywiZXhwIjoyMDU5MDI4NTQzfQ.Wcu1w5cVJaugBefDL2ePU3xjS1nai_ioJAiFnw-SkkA" },
    ],
  }
  const _data = new Map<string, ResourceRequest>([
    ["SupabaseDataLinks_1", SupabaseDataLinks_1],
  ])
  const _action = new Map<string, ResourceRequest>([
  ])
  return { data: _data, action: _action }
}


      export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  return {
    title: "Home",
    description: undefined,
    excludePageFromSearch: undefined,
    language: undefined,
    socialImageAssetName: undefined,
    socialImageUrl: undefined,
    status: undefined,
    redirect: undefined,
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const projectId = "7767efa1-0d7c-4bf8-9d20-cc424071798d";

      export const contactEmail = "liam@studio-kontrast.fr";
    