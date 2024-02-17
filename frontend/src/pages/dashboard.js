import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/ui/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Home, PcCaseIcon } from "lucide-react";
import React from "react";
import { CodeBlock, CopyBlock } from "react-code-blocks";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Chats",
    link: "#features",
    icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Dashboard",
    link: "#contact",
    icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];
const data = [
  {
    id: 1,
    sender: "User1",
    message: "Hello, how are you?",
    timestamp: new Date().getTime() - 1000000,
  },
  {
    id: 2,
    sender: "User2",
    message: "I'm good, thanks! How about you?",
    timestamp: new Date().getTime() - 5000,
  },
  {
    id: 3,
    sender: "User1",
    message:
      "Here's a code snippet: \n\n```javascript\nlet x = 10;\nconsole.log(x);\n```",
    timestamp: new Date().getTime(),
  },
  {
    id: 4,
    sender: "User1",
    message: "Hello, how are you?",
    timestamp: new Date().getTime() - 1000000,
  },
  {
    id: 5,
    sender: "User2",
    message: "I'm good, thanks! How about you?",
    timestamp: new Date().getTime() - 5000,
  },
  {
    id: 6,
    sender: "User1",
    message:
      "Here's another code snippet: \n\n```javascript\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\nconsole.log(greet('world'));\n```",
    timestamp: new Date().getTime(),
  },
  {
    id: 7,
    sender: "User1",
    message: "Hello, how are you?",
    timestamp: new Date().getTime() - 1000000,
  },
  {
    id: 8,
    sender: "User2",
    message: "I'm good, thanks! How about you?",
    timestamp: new Date().getTime() - 5000,
  },
  {
    id: 9,
    sender: "User1",
    message:
      "Here's yet another code snippet: \n\n```javascript\nlet arr = [1, 2, 3, 4, 5];\nlet sum = arr.reduce((a, b) => a + b, 0);\nconsole.log(sum);\n```",
    timestamp: new Date().getTime(),
  },
  {
    id: 10,
    sender: "User1",
    message: "Hello, how are you?",
    timestamp: new Date().getTime() - 1000000,
  },
  {
    id: 11,
    sender: "User2",
    message: "I'm good, thanks! How about you?",
    timestamp: new Date().getTime() - 5000,
  },
  {
    id: 12,
    sender: "User1",
    message:
      "Here's a final code snippet: \n\n```javascript\nlet obj = {name: 'John', age: 30};\nconsole.log(obj.name);\n```",
    timestamp: new Date().getTime(),
  },
];

function Dashboard() {
  return (
    <div className="h-screen flex-col flex items-start">
      <Navbar navItems={navItems} />
      <div className="w-3/5 mx-auto mt-20 flex h-full gap-12 py-12">
        <div className="h-full bg-black w-80">1</div>
        <div className="flex-1 h-full flex flex-col gap-12">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Title</CardTitle>
            </CardHeader>
            <ScrollArea className="h-[500px] ">
              <CardContent className="grid gap-10 text-lg">
                {data.map((message) => {
                  const isCode = message.message.includes("```");
                  let text = message.message;
                  let code = "";

                  if (isCode) {
                    [text, code] = message.message.split("```");
                    code = code.replace("javascript\n", "").slice(0, -1); // remove the language specification and the last newline character
                  }
                  return (
                    <div
                      key={message.id}
                      className="flex items-start justify-start gap-8"
                    >
                      <img
                        src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-260nw-2261401207.jpg"
                        alt="User Avatar"
                        className="w-8 h-8"
                      />

                      <div className="flex justify-between items-start flex-1">
                        <div className="flex flex-col gap-3">
                          <p>{text}</p>
                          {isCode && (
                            <CodeBlock
                              text={code}
                              //   language={props.language}
                              showLineNumbers={true}
                            />
                          )}
                        </div>

                        <p>
                          {`${new Date(
                            message.timestamp
                          ).getHours()}:${new Date(
                            message.timestamp
                          ).getMinutes()} `}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </ScrollArea>
          </Card>
          <div className="flex items-center gap-12">
            <Textarea className="resize-none h-[60px] text-xl p-3 w-full" />
            <Button size="lg" className="h-full rounded-md">
              Generate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
