document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById("editor");
    const preview = document.getElementById("preview");

    function updatePreview() {
        const markdown = editor.value;
        const html = marked(markdown, { breaks: true });
        preview.innerHTML = html;
    }

    editor.addEventListener("input", updatePreview);

    const defaultMarkdown = `
  # Heading 1
## Heading 2
### Heading 3
**boldtext**

*italicized text*
 > blockquote

**Ordered List**
1. First item
2. Second item
3. Third item

**Unordered List**
- First item
- Second item
- Third item

**Task List**
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media 

**Link** 
[title](https://www.example.com)

**Image**
![alt text](https://via.placeholder.com/150)

**Inline Code**
\`Console.log("Hello, World");\`

**Block Code**
\`\`\`
const toPrint = "Goodbye, World";
console.log(toPrint);
\`\`\` 
      `;
    editor.value = defaultMarkdown;
    updatePreview();
});
