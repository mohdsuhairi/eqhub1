import { Doc } from "@/convex/_generated/dataModel";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";


export function DocumentCard({ document }: { document: Doc<"documents"> }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{document.title}</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <Button asChild variant="secondary" className="flex items-center gap-2">
                    <Link href={`/documents/${document._id}`}>    
                        <Eye className="w-4 h-4" />View
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
