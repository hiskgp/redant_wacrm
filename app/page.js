
import fs from "fs";
import path from "path";

export default function Page() {
  const filePath = path.join(process.cwd(), "app", "content.html");
  const html = fs.readFileSync(filePath, "utf8");

  return (
    <iframe
      title="RedANT homepage"
      srcDoc={html}
      style={{
        display: "block",
        width: "100%",
        height: "100vh",
        minHeight: "100vh",
        border: "none",
      }}
    />
  );
}

// import fs from 'fs';
// import path from 'path';

// export default function Page() {
//   const filePath = path.join(process.cwd(), 'app', 'content.html');
//   const html = fs.readFileSync(filePath, 'utf8');
//   return <div dangerouslySetInnerHTML={{ __html: html }} />;
// }
