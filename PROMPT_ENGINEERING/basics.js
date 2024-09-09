const basicsData = {
    sections: [
        {
            title: "Prompt Engineering Basics",
            pages: [
                {
                    title: "Overview",
                    source: ["https://prompts.com/basics"],
                    slides: [
                        {
                            id: 1,
                            title: "Basic Prompt Engineering",
                            content: [
                                { label: "Concept", value: "Design effective prompts for language models" },
                                { label: "Importance", value: "Improves model responses by providing clearer instructions." }
                            ]
                        }
                    ]
                },
                {
                    title: "Token",
                    source: ["https://prompts.com/token"],
                    slides: [
                        {
                            id: 2,
                            title: "Token Definition",
                            content: [
                                { label: "Definition", value: "A unit of text or data (word, subword, or character)." },
                                { label: "Importance", value: "Tokens are the basic units of language models, used for processing text." }
                            ]
                        },
                        {
                            id: 3,
                            title: "Token Subentities",
                            content: [
                                { label: "Word Token", value: "A token that represents an entire word." },
                                { label: "Subword Token", value: "A token that represents a part of a word, used to handle rare words." },
                                { label: "Character Token", value: "A token representing a single character, useful in certain applications." }
                            ]
                        },
                        {
                            id: 4,
                            title: "Tokenization Strategy",
                            content: [
                                { label: "Description", value: "How inputs are split into tokens, such as byte-pair encoding or subword units." },
                                { label: "Importance", value: "The tokenization strategy influences model efficiency and effectiveness in handling text." }
                            ]
                        }
                    ]
                },
                {
                    title: "Next Token Prediction",
                    source: ["https://prompts.com/next-token-prediction"],
                    slides: [
                        {
                            id: 5,
                            title: "Next Token Prediction",
                            content: [
                                { label: "Definition", value: "The core task in language models, predicting the next token based on input." },
                                { label: "Importance", value: "Essential for generating coherent responses in natural language processing tasks." }
                            ]
                        },
                        {
                            id: 6,
                            title: "Prediction Accuracy",
                            content: [
                                { label: "Description", value: "Measures how accurately the model predicts the next token." },
                                { label: "Importance", value: "Higher accuracy leads to more reliable and useful model outputs." }
                            ]
                        },
                        {
                            id: 7,
                            title: "Prediction Context",
                            content: [
                                { label: "Description", value: "The surrounding context used to predict the next token." },
                                { label: "Importance", value: "The more context the model uses, the better it can predict the next token." }
                            ]
                        }
                    ]
                },
                {
                    title: "Model Properties",
                    source: ["https://prompts.com/model-properties"],
                    slides: [
                        {
                            id: 8,
                            title: "Model Definition",
                            content: [
                                { label: "Description", value: "The language model being described, including its capabilities and design." },
                                { label: "Importance", value: "Understanding model properties helps users effectively apply it in various tasks." }
                            ]
                        },
                        {
                            id: 9,
                            title: "Provider",
                            content: [
                                { label: "Description", value: "The organization that provides the model (e.g., OpenAI, Meta, Anthropic, Google)." },
                                { label: "Importance", value: "Provider details can influence trust, openness, and performance expectations." }
                            ]
                        },
                        {
                            id: 10,
                            title: "Input Context Window",
                            content: [
                                { label: "Description", value: "The number of tokens the model can handle as input in a single request." },
                                { label: "Importance", value: "A larger context window allows models to generate more coherent long-form outputs." }
                            ]
                        },
                        {
                            id: 11,
                            title: "Maximum Output Tokens",
                            content: [
                                { label: "Description", value: "The number of tokens the model can generate in a single request." },
                                { label: "Importance", value: "Defines the length of text that can be produced in one go, useful for summarization and generation tasks." }
                            ]
                        },
                        {
                            id: 12,
                            title: "Open Source Status",
                            content: [
                                { label: "Description", value: "Whether the model is open-source or not." },
                                { label: "Importance", value: "Open-source models offer more flexibility for customization and community contributions." }
                            ]
                        }
                    ]
                },
                {
                    title: "Training and Fine-Tuning",
                    source: ["https://prompts.com/training-finetuning"],
                    slides: [
                        {
                            id: 13,
                            title: "Training Dataset",
                            content: [
                                { label: "Description", value: "Source of data used for training the model." },
                                { label: "Corpus Size", value: "The size of the dataset in tokens, important for determining the model's knowledge base." }
                            ]
                        },
                        {
                            id: 14,
                            title: "Fine-tuning Techniques",
                            content: [
                                { label: "Instruction Tuning", value: "Fine-tuning the model for instruction-based tasks." },
                                { label: "Domain Tuning", value: "Specialized fine-tuning for domain-specific applications (e.g., legal, medical)." },
                                { label: "Reinforcement Learning with Human Feedback", value: "Fine-tuning based on human feedback for improved output quality." }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

