const humanevalData = {
    sections: [
        {
            title: "Human-Interacted Benchmarks",
            pages: [
                {
                    title: "HumanEval Benchmark",
                    source: ["https://paperswithcode.com/dataset/humaneval"],
                    slides: [
                        {
                            id: 1,
                            title: "What is HumanEval?",
                            content: [
                                { label: "Benchmark Name", value: "HumanEval" },
                                { label: "Purpose", value: "Evaluate the model’s ability to generate correct code from natural language descriptions." }
                            ]
                        },
                        {
                            id: 2,
                            title: "HumanEval Components",
                            content: [
                                { label: "Task Type", value: "Code generation tasks in languages like Python." },
                                { label: "Accuracy", value: "Measures how often the model generates correct code." }
                            ]
                        }
                    ]
                },
                {
                    title: "LLM Arena Benchmark",
                    source: ["https://lmarena.ai/"],
                    slides: [
                        {
                            id: 3,
                            title: "What is LLM Arena?",
                            content: [
                                { label: "Benchmark Name", value: "LLM Arena (Human Preference)" },
                                { label: "Purpose", value: "Test human preference for model-generated content across different scenarios." }
                            ]
                        },
                        {
                            id: 4,
                            title: "LLM Arena Components",
                            content: [
                                { label: "Test Type", value: "Human-in-the-loop evaluations for responses in chat, content generation, and reasoning tasks." },
                                { label: "Score", value: "Measures the degree of human preference for certain model outputs." }
                            ]
                        }
                    ]
                },
                {
                    title: "Turing Test Benchmark",
                    source: ["https://arxiv.org/pdf/2305.20010"],
                    slides: [
                        {
                            id: 5,
                            title: "What is the Turing Test?",
                            content: [
                                { label: "Benchmark Name", value: "Turing Test (Deception)" },
                                { label: "Purpose", value: "Test the model’s ability to deceive human evaluators into thinking it is human." }
                            ]
                        },
                        {
                            id: 6,
                            title: "Turing Test Components",
                            content: [
                                { label: "Task Type", value: "Deceptive conversation where the model tries to convince the human evaluator it is human." },
                                { label: "Score", value: "Measures the percentage of evaluators deceived." }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
