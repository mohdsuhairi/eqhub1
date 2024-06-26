'use client';

import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { DocumentCard } from "./document-card";
import CreateDocumentButton from "./create-document-button";


export default function Home() {

  const documents = useQuery(api.documents.getDocuments);
  //const createDocument = useMutation(api.documents.createDocument);

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    <main className="p-20 space-y-8">
      <div className="flex justify-between items-center">
      <h1 className="text-4xl font-bold">My Documents</h1>

      <CreateDocumentButton />
      {/* <Button onClick={() => {
          createDocument({title: 'Hello world'})
        }}>Upload Document
      </Button> */}
      </div>
      
      
        
        <div className="grid grid-cols-6 gap-8">
          {documents?.map((doc) => <DocumentCard document={doc} />)}
        </div>
        
    </main>
  );
}
