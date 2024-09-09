const advancedData = {
    sections: [
        {
            title: "Advanced Prompt Engineering",
            pages: [
                {
                    title: "Overview",
                    source: ["https://platform.openai.com/playground/chat?models=gpt-4o"],
                    slides: [
                        {
                            id: 1,
                            title: "Advanced Prompting Techniques",
                            content: [
                                { label: "Concept", value: "Complex multi-turn prompts and chaining" },
                                { label: "Techniques", value: "Prompt chaining, multi-step reasoning" }
                            ]
                        }
                    ]
                },
                {
                    title: "Temperature",
                    source: ["https://platform.openai.com/docs/api-reference/fine-tuning/create"],
                    slides: [
                        {
                            id: 2,
                            title: "Temperature Definition",
                            content: [
                                { label: "Definition", value: "Controls the randomness of the model's output. Higher values increase randomness, while lower values make it more deterministic." },
                                { label: "Range", value: "0.0 to 1.0" }
                            ]
                        },
                        {
                            id: 3,
                            title: "High and Low Temperature Effects",
                            content: [
                                { label: "High Temperature", value: "Encourages creativity and unpredictability in outputs." },
                                { label: "Low Temperature", value: "Produces more deterministic and focused responses." }
                            ]
                        },
                        {
                            id: 4,
                            title: "Metaphors for Temperature",
                            content: [
                                { label: "Thermostat", value: "Low temperature keeps everything steady, high temperature increases fluctuation and randomness." },
                                { label: "Chef's Recipe", value: "Low temperature sticks to the recipe, high temperature improvises wildly." }
                            ]
                        }
                    ]
                },
                {
                    title: "Top-p",
                    source: ["https://community.openai.com/t/a-better-explanation-of-top-p/2426"],
                    slides: [
                        {
                            id: 5,
                            title: "Top-p Definition",
                            content: [
                                { label: "Definition", value: "Controls nucleus sampling by selecting tokens based on their cumulative probability mass." },
                                { label: "Range", value: "0 to 1.0" }
                            ]
                        },
                        {
                            id: 6,
                            title: "High and Low Top-p Effects",
                            content: [
                                { label: "High Top-p", value: "Allows the model to select from a broad range of tokens, increasing diversity." },
                                { label: "Low Top-p", value: "Focuses on the most probable tokens, making output more conservative and precise." }
                            ]
                        },
                        {
                            id: 7,
                            title: "Metaphors for Top-p",
                            content: [
                                { label: "Umbrella Coverage", value: "Low top-p covers only the most probable token choices, high top-p covers a broader set of tokens." },
                                { label: "Top-shelf Liquor", value: "Low top-p serves the finest, most probable choices, high top-p offers variety across the bar." }
                            ]
                        }
                    ]
                },
                {
                    title: "Frequency Penalty",
                    source: ["https://community.openai.com/t/difference-between-frequency-and-presence-penalties/2777"],
                    slides: [
                        {
                            id: 8,
                            title: "Frequency Penalty Definition",
                            content: [
                                { label: "Definition", value: "Penalizes the model for repeated use of the same tokens to reduce redundancy and increase diversity." },
                                { label: "Range", value: "0 to 2" }
                            ]
                        },
                        {
                            id: 9,
                            title: "High and Low Frequency Penalty Effects",
                            content: [
                                { label: "High Frequency Penalty", value: "Encourages the model to avoid repetition and promotes diverse expressions." },
                                { label: "Low Frequency Penalty", value: "Allows repetition, useful in structured outputs like code or legal documents." }
                            ]
                        },
                        {
                            id: 10,
                            title: "Metaphors for Frequency Penalty",
                            content: [
                                { label: "DJ Mixing", value: "High frequency penalty is like a DJ constantly switching tracks to keep things fresh." },
                                { label: "School Assignment", value: "High frequency penalty ensures diverse vocabulary, while low allows repetition of phrases." }
                            ]
                        }
                    ]
                },
                {
                    title: "Presence Penalty",
                    source: ["https://community.openai.com/t/presence-penalty-and-frequency-penalty-parameters/302813"],
                    slides: [
                        {
                            id: 11,
                            title: "Presence Penalty Definition",
                            content: [
                                { label: "Definition", value: "Penalizes the model for reusing concepts or tokens that have already been mentioned, promoting novelty." },
                                { label: "Range", value: "0 to 2" }
                            ]
                        },
                        {
                            id: 12,
                            title: "High and Low Presence Penalty Effects",
                            content: [
                                { label: "High Presence Penalty", value: "Encourages the model to introduce new ideas and avoid reusing previously mentioned tokens." },
                                { label: "Low Presence Penalty", value: "Allows thematic continuity by reusing the same concepts or tokens." }
                            ]
                        },
                        {
                            id: 13,
                            title: "Metaphors for Presence Penalty",
                            content: [
                                { label: "Tour Guide", value: "High presence penalty is like a guide constantly taking you to new places, while low presence keeps you in familiar areas." },
                                { label: "Storyteller", value: "High penalty introduces new characters and ideas, while low penalty keeps the focus on the main plot." }
                            ]
                        }
                    ]
                },
                {
                    title: "Max Tokens",
                    source: ["https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them"],
                    slides: [
                        {
                            id: 14,
                            title: "Max Tokens Definition",
                            content: [
                                { label: "Definition", value: "The maximum number of tokens the model can generate in a single request, controlling output length." },
                                { label: "Range", value: "Varies with model size, e.g., GPT-4 can handle up to 2,048 tokens." }
                            ]
                        },
                        {
                            id: 15,
                            title: "High and Low Max Tokens Effects",
                            content: [
                                { label: "High Max Tokens", value: "Allows the model to generate longer and more detailed responses, useful for in-depth content." },
                                { label: "Low Max Tokens", value: "Keeps the response concise, useful for summaries or short answers." }
                            ]
                        },
                        {
                            id: 16,
                            title: "Metaphors for Max Tokens",
                            content: [
                                { label: "Canvas Size", value: "Small max tokens are like a tiny canvas, while high max tokens provide a large mural for detailed responses." },
                                { label: "Typewriter Ribbon", value: "Low max tokens are like running out of typewriter ribbon mid-sentence, high tokens let you keep writing uninterrupted." }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

