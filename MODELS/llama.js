const llamaData = {
    sections: [
        {
            title: "Llama Overview",
            pages: [
                {
                    title: "Overview of AI at Meta",
                    source: [
                        "https://ai.meta.com/about/", 
                        "https://ai.meta.com/research/"
                    ],
                    slides: [
                        {
                            id: 1,
                            title: "Overview of AI at Meta",
                            content: [
                                { label: "Mission", value: "Advance AI to create a more connected world." },
                                { label: "Core Areas", value: "Research, product innovation, and infrastructure driving AI advancements." },
                                { label: "Collaboration", value: "Sharing research and engaging the AI community to push boundaries." }
                            ]
                        }
                    ]
                },
                {
                    title: "Our Approach to AI at Meta",
                    slides: [
                        {
                            id: 2,
                            title: "Our Approach to AI at Meta",
                            content: [
                                { label: "Fundamental AI Research", value: "Advancing AI understanding for societal benefit." },
                                { label: "Applied AI Research", value: "Enhancing product experiences and driving large-scale innovations." },
                                { label: "Core Principles", value: "Openness, Collaboration, Excellence, Scale." }
                            ]
                        }
                    ]
                },
                {
                    title: "Key Research Areas",
                    slides: [
                        {
                            id: 3,
                            title: "Key Research Areas",
                            content: [
                                { label: "Generative AI", value: "Enable creativity through AI." },
                                { label: "Computer Vision", value: "Advance visual world understanding." },
                                { label: "Embodied AI/Robotics", value: "AI agents that assist in real and virtual environments." },
                                { label: "NLP", value: "Building large-scale language understanding models." }
                            ]
                        }
                    ]
                },
                {
                    title: "LLaMA Nutrition Label",
                    slides: [
                        {
                            id: 4,
                            title: "LLaMA (Meta AI) - Nutrition Label",
                            content: [
                                { label: "Key Founders", value: "Yann LeCun, Mark Zuckerberg, Meta AI Research Team" },
                                { label: "Architecture", value: "LLaMA 2/3" },
                                { label: "Parameters", value: "7B to 405B" },
                                { label: "Max Input Tokens", value: "4096" },
                                { label: "Max Output Tokens", value: "4096" },
                                { label: "Training Method", value: "Self-supervised learning → Fine-tuning on specific datasets" },
                                { label: "Capabilities", value: "Open-source, customizable, efficient for academic research and technical projects." },
                                { label: "Limitations", value: "Limited usability for general-purpose tasks, requires significant customization and technical expertise." },
                                { label: "Difference that Makes a Difference", value: "Open-source, customizable for research and technical tasks; excellent for experimentation." }
                            ]
                        }
                    ]
                },
                {
                    title: "Overview of Llama 3.1",
                    source: ["https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md"],
                    slides: [
                        {
                            id: 5,
                            title: "Overview of Llama 3.1",
                            content: [
                                { label: "Model Family", value: "Llama 3.1 (Multilingual Large Language Models)" },
                                { label: "Sizes", value: "8B, 70B, 405B parameters" },
                                { label: "Architecture", value: "Auto-regressive transformer with Grouped-Query Attention (GQA)" },
                                { label: "Release Date", value: "July 23, 2024" },
                                { label: "License", value: "Llama 3.1 Community License" }
                            ]
                        }
                    ]
                },
                {
                    title: "Key Features of Llama 3.1",
                    slides: [
                        {
                            id: 6,
                            title: "Key Features of Llama 3.1",
                            content: [
                                { label: "Multilingual Support", value: "Supports 8 languages: English, German, French, Italian, Portuguese, Hindi, Spanish, Thai" },
                                { label: "Fine-Tuned Models", value: "Optimized for multilingual dialogue and general-purpose use" },
                                { label: "Pretraining Data", value: "~15 trillion tokens from public sources" },
                                { label: "Context Window", value: "Supports up to 128k tokens" },
                                { label: "Knowledge Cutoff", value: "December 2023" }
                            ]
                        }
                    ]
                },
                {
                    title: "Environmental Considerations",
                    slides: [
                        {
                            id: 7,
                            title: "Environmental Considerations",
                            content: [
                                { label: "Training Power", value: "39.3M GPU hours on Meta's custom infrastructure" },
                                { label: "Greenhouse Gas Emissions", value: "11,390 tons CO2eq (location-based), net zero market-based emissions" },
                                { label: "Renewable Energy", value: "Meta matches 100% of electricity use with renewable sources" }
                            ]
                        }
                    ]
                },
                {
                    title: "Benchmark Performance",
                    slides: [
                        {
                            id: 8,
                            title: "Benchmark Performance",
                            content: [
                                { label: "General Benchmarks", value: "MMLU: 66.7%-85.9% accuracy, ARC-Challenge: 79.7%-96.1% accuracy" },
                                { label: "Instruction-Tuned Models", value: "HumanEval (coding): 72.6%-89.0% pass@1, MATH: 51.9%-73.8% accuracy" }
                            ]
                        }
                    ]
                },
                {
                    title: "Responsibility & Safety",
                    slides: [
                        {
                            id: 9,
                            title: "Responsibility & Safety",
                            content: [
                                { label: "Safety Strategy", value: "1. Enable safe, flexible experiences, 2. Protect against adversarial users, 3. Provide community protections to prevent misuse." },
                                { label: "Safeguards", value: "Llama Guard 3, Prompt Guard, and Code Shield" }
                            ]
                        }
                    ]
                },
                {
                    title: "Ethical Considerations",
                    slides: [
                        {
                            id: 10,
                            title: "Ethical Considerations",
                            content: [
                                { label: "Core Values", value: "Openness, inclusivity, helpfulness" },
                                { label: "Key Risks", value: "Bias, inaccuracy, and objectionable outputs" },
                                { label: "Mitigations", value: "Adversarial testing, fine-tuning, red teaming with domain experts" },
                                { label: "Developer Responsibility", value: "Perform safety testing and implement safeguards tailored to specific applications." }
                            ]
                        }
                    ]
                },
                {
                    title: "Community & Collaboration",
                    slides: [
                        {
                            id: 11,
                            title: "Community & Collaboration",
                            content: [
                                { label: "Open Source", value: "Tools like Purple Llama and partnerships with MLCommons" },
                                { label: "Community Engagement", value: "Llama Impact Grants program for societal benefit" },
                                { label: "Ongoing Support", value: "Bug bounty programs and feedback mechanisms to improve Llama 3.1" }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

