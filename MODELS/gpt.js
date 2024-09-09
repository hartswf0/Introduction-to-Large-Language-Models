const gptData = {
    sections: [
        {
            title: "GPT Overview",
            pages: [
                {
                    title: "ChatGPT - Nutrition Label",
                    source: ["https://openai.com/gpt-4"],
                    slides: [
                        {
                            id: 1,
                            title: "ChatGPT (OpenAI) - Nutrition Label",
                            content: [
                                { label: "Key Founders", value: "Ilya Sutskever, Greg Brockman, Andrej Karpathy, Sam Altman" },
                                { label: "Architecture", value: "GPT-4" },
                                { label: "Parameters", value: "175 billion" },
                                { label: "Max Input Tokens", value: "8192" },
                                { label: "Max Output Tokens", value: "8192" },
                                { label: "Training Method", value: "Pretraining → Fine-Tuning → Reinforcement Learning from Human Feedback (RLHF)" },
                                { label: "Capabilities", value: "Versatile, general-purpose, excels in conversational AI, content generation, customer service." },
                                { label: "Limitations", value: "Not multimodal, limited context window compared to Claude, lacks domain-specific tuning." },
                                { label: "Difference that Makes a Difference", value: "Strong human preference due to RLHF; effective for general-purpose tasks." }
                            ]
                        }
                    ]
                },
                {
                    title: "About OpenAI",
                    source: ["https://openai.com/about/", "https://openai.com/charter/", "https://openai.com/index/planning-for-agi-and-beyond/"],
                    slides: [
                        {
                            id: 2,
                            title: "Mission and Vision of OpenAI",
                            content: [
                                { label: "Mission", value: "Ensure artificial general intelligence (AGI) benefits all of humanity." },
                                { label: "Vision", value: "Building safe, beneficial AGI while supporting others in achieving this goal." },
                                { label: "Key Focus", value: "Research, deployment, and collaboration with global communities." }
                            ]
                        }
                    ]
                },
                {
                    title: "AGI Vision & Goals",
                    slides: [
                        {
                            id: 3,
                            title: "AGI Vision & Goals",
                            content: [
                                { label: "AGI Definition", value: "AI systems generally smarter than humans." },
                                { label: "Potential", value: "Increase global abundance, accelerate scientific discovery, and aid in cognitive tasks." },
                                { label: "Risks", value: "Misuse, societal disruption, and accidents. Our goal is to maximize benefits and minimize harms." }
                            ]
                        }
                    ]
                },
                {
                    title: "GPT-4o Overview",
                    source: ["https://openai.com/index/gpt-4o-system-card/"],
                    slides: [
                        {
                            id: 4,
                            title: "GPT-4o Overview",
                            content: [
                                { label: "Object", value: "GPT-4o" },
                                { label: "Attributes", value: "Omni-model, integrates text, vision, audio for inputs and outputs, faster than previous models, 50% cheaper." },
                                { label: "Context", value: "Excels in multimodal tasks and multilingual text processing." },
                                { label: "Key Differentiator", value: "Matches GPT-4 Turbo’s performance while enhancing speed and cost-effectiveness, particularly for non-English languages." }
                            ]
                        }
                    ]
                },
                {
                    title: "Risk Mitigation and Evaluation",
                    slides: [
                        {
                            id: 5,
                            title: "Risk Mitigation and Evaluation",
                            content: [
                                { label: "Risk Categories", value: "Unauthorized Voice Generation, Ungrounded Inference, Content Moderation." },
                                { label: "Preparedness Framework", value: "Evaluates risk in Cybersecurity, Biological Threats, Persuasion, and Model Autonomy." }
                            ]
                        }
                    ]
                },
                {
                    title: "Model Interactions and Safety",
                    slides: [
                        {
                            id: 6,
                            title: "Model Interactions and Safety",
                            content: [
                                { label: "Speaker Identification", value: "Refuses to identify individuals from voice inputs except for famous quotes." },
                                { label: "Voice Generation", value: "Only uses pre-approved voices, detects deviations through a classifier." },
                                { label: "Artifacts", value: "Handles real-time tasks across text, audio, and images, while complying with strict safety guidelines." }
                            ]
                        }
                    ]
                },
                {
                    title: "Preparedness Framework Evaluation",
                    slides: [
                        {
                            id: 7,
                            title: "Preparedness Framework Evaluation",
                            content: [
                                { label: "Cybersecurity", value: "Low risk for real-world vulnerability exploitation." },
                                { label: "Persuasion", value: "Marginal medium risk due to potential influence through text." },
                                { label: "Biological Threats", value: "Low, no significant advancements in threat creation." },
                                { label: "Model Autonomy", value: "Low, unable to perform autonomous self-improvements or exfiltration." }
                            ]
                        }
                    ]
                },
                {
                    title: "Multimodal Capabilities and Societal Impact",
                    slides: [
                        {
                            id: 8,
                            title: "Multimodal Capabilities and Societal Impact",
                            content: [
                                { label: "Use Case", value: "Biomedical research, language comprehension across underrepresented languages, and visual reasoning tasks." },
                                { label: "Societal Impact", value: "Enhances access to health information, improves clinical workflows, assists in scientific hypothesis generation." },
                                { label: "Language Accessibility", value: "Improves reading comprehension and reasoning in historically underrepresented languages." }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
