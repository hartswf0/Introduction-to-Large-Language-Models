const mmluData = {
    sections: [
        {
            title: "Benchmarks",
            pages: [
                {
                    title: "MMLU Benchmark",
                    source: ["https://mmlu.com"],
                    slides: [
                        {
                            id: 1,
                            title: "What is MMLU?",
                            content: [
                                { label: "Benchmark Name", value: "Massive Multitask Language Understanding (MMLU)" },
                                { label: "Purpose", value: "Evaluate the model’s performance across a wide range of subjects like history, biology, and math." }
                            ]
                        },
                        {
                            id: 2,
                            title: "MMLU Components",
                            content: [
                                { label: "Subjects Tested", value: "History, Physics, Biology, etc." },
                                { label: "Task Type", value: "Multiple-choice questions." },
                                { label: "Accuracy", value: "Measures the model’s accuracy on different subjects." }
                            ]
                        }
                    ]
                },
                {
                    title: "MMMU Benchmark",
                    source: ["https://mmmu.com"],
                    slides: [
                        {
                            id: 3,
                            title: "What is MMMU?",
                            content: [
                                { label: "Benchmark Name", value: "Multimodal Massive Multitask Benchmark (MMMU)" },
                                { label: "Purpose", value: "Evaluate the model’s ability across text, images, and audio tasks." }
                            ]
                        },
                        {
                            id: 4,
                            title: "MMMU Components",
                            content: [
                                { label: "Modality", value: "Text, Image, Audio." },
                                { label: "Task Type", value: "Image Captioning, Speech Recognition." },
                                { label: "Final Score", value: "Measures the overall performance across all tasks." }
                            ]
                        }
                    ]
                },
                {
                    title: "HellaSwag Benchmark",
                    source: ["https://hellaswag.com"],
                    slides: [
                        {
                            id: 5,
                            title: "What is HellaSwag?",
                            content: [
                                { label: "Benchmark Name", value: "HellaSwag" },
                                { label: "Purpose", value: "Test the model’s commonsense reasoning by completing sentences." }
                            ]
                        },
                        {
                            id: 6,
                            title: "HellaSwag Components",
                            content: [
                                { label: "Sentence Completion", value: "The model is presented with an incomplete sentence and must choose the best ending." },
                                { label: "Accuracy", value: "Measures how accurately the model completes sentences based on commonsense reasoning." }
                            ]
                        }
                    ]
                },
                {
                    title: "MATH Benchmark",
                    source: ["https://mathbenchmark.com"],
                    slides: [
                        {
                            id: 7,
                            title: "What is the MATH Benchmark?",
                            content: [
                                { label: "Benchmark Name", value: "MATH Benchmark" },
                                { label: "Purpose", value: "Test the model’s ability to solve complex mathematical tasks." }
                            ]
                        },
                        {
                            id: 8,
                            title: "MATH Benchmark Components",
                            content: [
                                { label: "Problem Type", value: "Includes Algebra, Geometry, and Calculus." },
                                { label: "Difficulty Level", value: "Beginner, Intermediate, Advanced." },
                                { label: "Score", value: "Measures the model’s accuracy on solving mathematical problems." }
                            ]
                        }
                    ]
                },
                {
                    title: "Big Bench Benchmark",
                    source: ["https://bigbench.com"],
                    slides: [
                        {
                            id: 9,
                            title: "What is Big Bench?",
                            content: [
                                { label: "Benchmark Name", value: "Big Bench (Academic Text)" },
                                { label: "Purpose", value: "Evaluate model performance on tasks such as understanding academic papers, completing research-related tasks." }
                            ]
                        },
                        {
                            id: 10,
                            title: "Big Bench Components",
                            content: [
                                { label: "Test Type", value: "Tasks include reading comprehension, summarizing academic text, and answering research questions." },
                                { label: "Score", value: "Measures performance on academic and research-related tasks." }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
