import { openai } from "@ai-sdk/openai";
import type { CoreMessage } from "ai";
import { streamText } from "ai";
import { z } from "zod";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages } = await req.json() as { messages: CoreMessage[] };

    const result = await streamText({
        model: openai("gpt-4o-mini"),
        messages,
        tools: {
            searchWeb: {
                description:
                    "Perform a search on the web for real-time information.",
                parameters: z.object({
                    query: z
                        .string()
                        .describe(
                            "Any question or topic to search the web for.",
                        ),
                }),
                execute: async ({ query }: { query: string }) => {
                    const options = {
                        method: "POST",
                        headers: {
                            Authorization:
                                "Bearer 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",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            model: "llama-3.1-sonar-small-128k-online",
                            messages: [
                                {
                                    role: "system",
                                    content: "Be as detailed as possible.",
                                },
                                { role: "user", content: query },
                            ],
                            temperature: 0.2,
                            top_p: 0.9,
                            return_citations: true,
                            search_domain_filter: ["perplexity.ai"],
                            return_images: false,
                            return_related_questions: false,
                            search_recency_filter: "month",
                            top_k: 0,
                            stream: false,
                            presence_penalty: 0,
                            frequency_penalty: 1,
                        }),
                    };

                    const response = await fetch(
                        "https://api.perplexity.ai/chat/completions",
                        options,
                    );
                    const data = await response.json() as {
                        choices: { message: { content: string } }[];
                    };

                    return `${query} ${data.choices[0].message.content}`;
                },
            },
        },
    });

    return result.toDataStreamResponse();
}
