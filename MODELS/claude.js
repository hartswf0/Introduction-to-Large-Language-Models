const claudeData = {
    sections: [
        {
            title: "Claude Overview",
            pages: [
                {
                    title: "Claude (Anthropic) - Nutrition Label",
                    source: ["https://claude.ai"],
                    slides: [
                        {
                            id: 1,
                            title: "Claude 2 Overview",
                            content: [
                                { label: "Model Name", value: "Claude 2" },
                                { label: "Capabilities", value: "Natural Language Processing, Conversational AI" }
                            ]
                        },
                        {
                            id: 2,
                            title: "Claude 3.5 Nutrition Label",
                            content: [
                                { label: "Key Founders", value: "Dario Amodei, Daniela Amodei" },
                                { label: "Architecture", value: "Claude 3.5" },
                                { label: "Parameters", value: "52 billion" },
                                { label: "Max Input Tokens", value: "100,000" },
                                { label: "Max Output Tokens", value: "100,000" },
                                { label: "Training Method", value: "Pretraining → Fine-Tuning → Constitutional AI, RLHF" },
                                { label: "Capabilities", value: "Ethical AI focus, long-context handling, excels in compliance-heavy tasks like legal or healthcare documentation." },
                                { label: "Limitations", value: "Not as versatile in general use cases, lacks multimodal abilities." },
                                { label: "Difference that Makes a Difference", value: "Constitutional AI approach prioritizes safety, ethics, and long-context understanding, ideal for sensitive industries." }
                            ]
                        }
                    ]
                },
                {
                    title: "Anthropic Research Framework",
                    slides: [
                        {
                            id: 3,
                            title: "Anthropic Mission Statement",
                            content: [
                                { label: "Mission Quote", value: "Our research teams investigate the safety, inner workings, and societal impact of AI models — so that artificial intelligence has a positive impact on society as it becomes increasingly advanced and capable." }
                            ]
                        },
                        {
                            id: 4,
                            title: "Research Teams",
                            content: [
                                { label: "Interpretability Team", value: "Understands the inner workings of AI models to ensure safety and positive outcomes." },
                                { label: "Alignment Team", value: "Focuses on keeping AI systems helpful, honest, and harmless." },
                                { label: "Societal Impacts Team", value: "Collaborates with Policy and Trust & Safety to ensure AI interacts positively with society." }
                            ]
                        },
                        {
                            id: 5,
                            title: "Research Principles",
                            content: [
                                { label: "AI as a Systematic Science", value: "Scaling laws guide the training of AI networks based on data, compute, and parameters." },
                                { label: "Safety and Scaling", value: "Larger models bring safety challenges; research focuses on making them more reliable." },
                                { label: "Tools and Measurements", value: "Building tools to evaluate AI capabilities, limitations, and societal impact." }
                            ]
                        },
                        {
                            id: 6,
                            title: "Collaborative Research",
                            content: [
                                { label: "Research Approach", value: "Combines top-down planning with input from researchers, engineers, societal experts, and policy analysts." },
                                { label: "External Collaboration", value: "Encouraged to foster a broad community of research in AI safety and understanding." }
                            ]
                        }
                    ]
                },
                {
                    title: "Claude 3.5 Sonnet Overview",
                    slides: [
                        {
                            id: 7,
                            title: "Claude 3.5 Sonnet Overview",
                            content: [
                                { label: "Attributes", value: "High-speed, cost-effective AI with graduate-level reasoning, coding proficiency, and context handling." },
                                { label: "Context", value: "Ideal for solving complex problems, orchestrating workflows, and customer support automation." },
                                { label: "Key Difference", value: "Outperforms Claude 3 Opus in intelligence and efficiency across various benchmarks." }
                            ]
                        },
                        {
                            id: 8,
                            title: "Relationships and Interactions",
                            content: [
                                { label: "Comparison", value: "Exceeds prior versions (Claude 3 Opus) in coding tasks (64% vs. 38% success rate), visual reasoning, and cost-performance tradeoff." },
                                { label: "Interaction", value: "Users interact with Claude through the Artifact feature for real-time, collaborative outputs like code, documents, or designs." }
                            ]
                        }
                    ]
                },
                {
                    title: "Artifacts and Outputs",
                    slides: [
                        {
                            id: 9,
                            title: "Artifacts and Outputs",
                            content: [
                                { label: "Artifacts", value: "Code snippets, workflow orchestrations, and documents generated on-demand by Claude 3.5 Sonnet." },
                                { label: "Use Cases", value: "Ideal for customer support, technical debugging, and enterprise collaboration." }
                            ]
                        }
                    ]
                },
                {
                    title: "Processes and Capabilities",
                    slides: [
                        {
                            id: 10,
                            title: "Processes and Capabilities",
                            content: [
                                { label: "Problem-Solving", value: "Handles debugging, code generation, and workflow tasks with advanced reasoning capabilities." },
                                { label: "Benchmarking", value: "Evaluated on GPQA (graduate reasoning), MMLU (undergraduate knowledge), HumanEval (coding), and visual benchmarks for interpreting images and graphs." }
                            ]
                        }
                    ]
                },
                {
                    title: "Safety Mechanisms",
                    slides: [
                        {
                            id: 11,
                            title: "Safety Mechanisms",
                            content: [
                                { label: "Privacy", value: "Claude is designed not to train on user-submitted data unless explicitly permitted by the user." },
                                { label: "Safety Evaluation", value: "Tested and approved by UK and US AI Safety Institutes, focusing on preventing misuse and ensuring ethical behavior." }
                            ]
                        }
                    ]
                },
                {
                    title: "Generative Process and Constitutional Principles",
                    slides: [
                        {
                            id: 12,
                            title: "Generative Process and Constitutional Principles",
                            content: [
                                { label: "Generative Process", value: "Claude creates real-time outputs based on user prompts and integrates them into workflows via the Artifact feature." },
                                { label: "Constitutional Principles", value: "Guided by ethical AI development focused on safety and privacy." }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

