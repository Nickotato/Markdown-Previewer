document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById("editor");
    const preview = document.getElementById("preview");

    function updatePreview() {
        const markdown = editor.value;
        const html = marked(markdown, { breaks: true });
        preview.innerHTML = html;
    }

    editor.addEventListener("input", updatePreview);

    // Initial load
    const defaultMarkdown = `
  # Heading 1
  ## Heading 2
  [Link](https://www.example.com)
  \`inline code\`
  \`\`\`
  // Code block
  const greeting = 'Hello';
  console.log(greeting);
  \`\`\`
  - List item 1
  - List item 2
  > Blockquote
  ![Image](https://via.placeholder.com/150)
  **Bold text**
      `;
    editor.value = defaultMarkdown;
    updatePreview();
});
