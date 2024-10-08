const educationData = {
    sections: [
      {
        title: "Education and Academia Use Cases",
        pages: [
          {
            title: "Academic Research",
            source: ["https://sakana.ai/ai-scientist/"],
            slides: [
              {
                id: 1,
                title: "Academic Research (Academia)",
                content: [
                  { label: "Industry", value: "Academia (Research and Development)" },
                  { label: "Prompt Engineering Technique", value: "Self-Reflection Prompting" },
                  {
                    label: "Explanation",
                    value: "The model reflects on its own output and compares it to academic standards."
                  },
                  {
                    label: "Example Prompt",
                    value: "After generating this research summary, reflect on its completeness and suggest additional areas for improvement."
                  },
                  {
                    label: "Output",
                    value: "Generates a self-assessment and suggests areas for improvement in research summaries."
                  }
                ]
              }
            ]
          },
          {
            title: "Education and Training",
            source: ["https://openai.com/index/teaching-with-ai/"],
            slides: [
              {
                id: 2,
                title: "Education and Training (Learning)",
                content: [
                  { label: "Industry", value: "Education (Learning and Training)" },
                  { label: "Prompt Engineering Technique", value: "Contextual Learning Prompting" },
                  {
                    label: "Explanation",
                    value: "Providing step-by-step explanations or tutorials based on the learner’s progress."
                  },
                  {
                    label: "Example Prompt",
                    value: "Explain how machine learning works to a beginner, and give examples of how it is applied in the real world."
                  },
                  {
                    label: "Output",
                    value: "Generates easy-to-understand explanations based on the learner’s current understanding."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Code Use Cases",
        pages: [
          {
            title: "Code Generation and Testing",
            source: ["https://www.phind.com/search?home=true"],
            slides: [
              {
                id: 3,
                title: "Code Generation and Testing",
                content: [
                  { label: "Industry", value: "Technology (Software Development)" },
                  { label: "Prompt Engineering Technique", value: "Test-Driven Prompting" },
                  {
                    label: "Explanation",
                    value: "Generates code based on user requirements and ensures its correctness by integrating test cases into the prompt, validating that the generated code works as expected."
                  },
                  {
                    label: "Example Prompt",
                    value: "Write a Python function that returns the Fibonacci sequence, and include unit tests to validate the function for edge cases."
                  },
                  {
                    label: "Output",
                    value: "Produces the Python function for generating the Fibonacci sequence, followed by unit tests to ensure the function handles all specified edge cases correctly."
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  