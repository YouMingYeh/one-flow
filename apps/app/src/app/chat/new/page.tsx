'use client';
import type { Message } from 'ai/react';
import { useChat } from 'ai/react';
import { AnimatePresence, motion } from 'framer-motion';
import { memo, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { ToolInvocation } from 'ai';
import { Button, Icons, Textarea } from 'ui';
import { v4 as uuid } from 'uuid';
import { marked } from 'marked';

interface NewPageProps {
  searchParams: {
    query: string;
  };
}

export default function NewPage({ searchParams: { query } }: NewPageProps) {
  const {
    messages,
    input,
    handleInputChange,
    addToolResult,
    isLoading,
    setInput,
    append,
  } = useChat({
    maxSteps: 3,
    initialMessages: [
      {
        id: uuid(),
        role: 'system',
        content: `您是一位专业的跨境电商顾问，专精于协助卖家解决在国际市场中遇到的各种挑战。您的职责包括：

1. **平台选择与比较**：提供各大跨境电商平台的优缺点分析，协助卖家选择最适合其产品的销售平台。

2. **支付服务建议**：介绍可靠的国际支付服务供应商，并说明选择时应考虑的因素。

3. **物流与配送策略**：建议高效的跨境物流方案，并比较各国的物流成本和配送时间。

4. **关税与法规指导**：提供各国进出口关税和法规的信息，提醒卖家在不同国家销售产品时需注意的法律问题。

5. **多语言客服支持**：推荐多语言客服工具，并提供管理多语言客户服务团队的策略。

6. **税务合规建议**：指导卖家如何处理各国的税务问题，并分享税务合规的最佳实践。

7. **市场分析与品牌建立**：协助卖家分析目标国家的消费者行为和偏好，并提供在国际市场上建立和推广品牌的策略。

8. **汇率风险管理**：建议管理多国货币汇率风险的方法，并介绍相关的对冲工具。

9. **法律风险防范**：指出跨境电商常见的法律风险，并提供确保业务符合各国法律规定的建议。

10. **其他相关咨询**：针对跨境电商卖家提出的其他问题，提供专业的建议和解答。

请根据上述职责，为卖家提供详细且实用的建议，并确保信息的准确性和时效性。
`,
      },
    ],
    generateId: () => uuid(),
    onFinish: async message => {
      if (message.role === 'system') {
        return null;
      }
    },
  });

  const [composition, setComposition] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    document.addEventListener('compositionstart', () => {
      setComposition(true);
    });
    document.addEventListener('compositionend', () => {
      setComposition(false);
    });
    return () => {
      document.removeEventListener('compositionstart', () => {
        setComposition(true);
      });
      document.removeEventListener('compositionend', () => {
        setComposition(false);
      });
    };
  }, []);

  const handleTextareaChange = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleScrollToBottom = () => {
    bottomRef.current?.scrollIntoView();
  };

  useEffect(() => {
    if (!bottomRef.current) {
      return;
    }
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setBottomVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(bottomRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    handleScrollToBottom();
  }, []);

  useEffect(() => {
    if (bottomVisible) {
      handleScrollToBottom();
    }
    if (messages.length === 0) {
      return;
    }
    const lastMessage = messages[messages.length - 1];

    if (lastMessage.role !== 'user') {
      return;
    }
  }, [bottomVisible, messages]);

  useEffect(() => {
    handleTextareaChange();
  }, [input]);

  useEffect(() => {
    if (query && !isLoading) {
      void append({
        id: uuid(),
        role: 'user',
        content: query,
      });
    }
  }, []);

  return (
    <>
      <div className='relative mx-auto h-fit w-full max-w-xl px-2 pb-32'>
        {messages.map(
          (m: Message) =>
            m.role !== 'system' &&
            (m.content || m.toolInvocations) && (
              <div
                className={`w-fit py-8 ${
                  m.role === 'user'
                    ? 'ml-auto max-w-[80%]'
                    : 'mr-auto max-w-[80%] text-left'
                }`}
                key={m.id}
              >
                <div className='relative mx-auto flex space-x-4 px-4'>
                  <div className='flex-shrink-0'>
                    {m.role === 'user' ? null : (
                      <div className='flex-shrink-0'>
                        <Image
                          alt='Adastra'
                          className='h-8 w-8 translate-y-4 rounded'
                          height={32}
                          src='/logo.png'
                          width={32}
                        />
                      </div>
                    )}
                  </div>
                  <div className=''>
                    <MessageContent content={m.content} />
                    {/* {m.role === "assistant" && !isLoading && m.content && (
                      <>
                        <CopyButton
                          text={m.content}
                          variant="ghost"
                          size="icon"
                        >
                          <Icons.Copy className="size-full text-muted-foreground" />
                        </CopyButton>

                        <ReloadButton
                          reload={reload}
                          variant="ghost"
                          size="icon"
                        >
                          <Icons.RefreshCcw className="size-full text-muted-foreground" />
                        </ReloadButton>
                      </>
                    )} */}

                    {m.toolInvocations?.map(
                      (
                        toolInvocation: ToolInvocation & {
                          args: { message: string };
                        },
                      ) => {
                        const toolCallId = toolInvocation.toolCallId;
                        const addResult = (result: string) => {
                          addToolResult({ toolCallId, result });
                        };

                        if (toolInvocation.toolName === 'askForConfirmation') {
                          return (
                            <div
                              className='bg-background rounded-md border p-4 shadow-sm'
                              key={toolCallId}
                            >
                              <p className='mb-3 text-sm'>
                                {
                                  (toolInvocation.args as { message: string })
                                    .message
                                }
                              </p>
                              {'result' in toolInvocation ? (
                                <p className='text-sm font-medium text-green-600'>
                                  {toolInvocation.result}
                                </p>
                              ) : (
                                <div className='space-x-2'>
                                  <Button
                                    onClick={() => {
                                      addResult('好的');
                                    }}
                                    size='sm'
                                  >
                                    好的
                                  </Button>
                                  <Button
                                    onClick={() => {
                                      addResult('再想想');
                                    }}
                                    size='sm'
                                    variant='secondary'
                                  >
                                    再想想
                                  </Button>
                                </div>
                              )}
                            </div>
                          );
                        } else if (
                          toolInvocation.toolName === 'bringUserToDashboard'
                        ) {
                          return (
                            <div
                              className='bg-background rounded-md border p-4 shadow-sm'
                              key={toolCallId}
                            >
                              {'result' in toolInvocation ? (
                                <p className='text-sm font-medium text-green-600'>
                                  {toolInvocation.result}
                                </p>
                              ) : (
                                <div className='space-x-2' />
                              )}
                            </div>
                          );
                        }

                        return 'result' in toolInvocation ? (
                          <div
                            className='shadow-xs border-muted bg-background mt-4 rounded-md border p-4'
                            key={toolCallId}
                          >
                            <Icons.Check className='m-auto' />
                          </div>
                        ) : (
                          <div
                            className='shadow-xs border-muted bg-background mt-4 animate-pulse rounded-md border p-4'
                            key={toolCallId}
                          >
                            <Icons.Spinner className='m-auto animate-spin' />
                          </div>
                        );

                        // return "result" in toolInvocation ? (
                        //   <details
                        //     key={toolCallId}
                        //     className="mt-4 rounded-md border bg-background p-4 shadow-sm"
                        //   >
                        //     <summary className="mb-1 text-xs text-muted-foreground">
                        //       Tool: {toolInvocation.toolName}
                        //     </summary>
                        //     <p className="text-xs text-muted-foreground">
                        //       {toolInvocation.result}
                        //     </p>
                        //   </details>
                        // ) : (
                        //   <div
                        //     key={toolCallId}
                        //     className="shadow-xs mt-4 animate-pulse rounded-md border border-muted bg-background p-4"
                        //   >
                        //     <p className="text-xs text-muted-foreground">
                        //       Calling {toolInvocation.toolName}...
                        //     </p>
                        //   </div>
                        // );
                      },
                    )}
                  </div>
                </div>
              </div>
            ),
        )}
        <div ref={bottomRef} />

        <form
          className='fixed bottom-8 left-4 right-4 m-auto flex w-[90%] max-w-md flex-col gap-2'
          onSubmit={e => {
            e.preventDefault();
            void append({
              id: uuid(),
              role: 'user',
              content: input,
            });
            setInput('');
          }}
        >
          <Textarea
            className='bg-background h-auto max-h-[200px] min-h-[40px] resize-none overflow-hidden rounded-lg border px-4 py-4 pr-12 text-base'
            onChange={e => {
              handleInputChange(e);
            }}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey && !composition) {
                e.preventDefault();
                void append({
                  id: uuid(),
                  role: 'user',
                  content: input,
                });
                setInput('');
              }
            }}
            ref={textareaRef}
            rows={1}
            value={input}
          />
          <Button
            className='absolute bottom-2 right-2'
            disabled={input.trim().length === 0}
            loading={isLoading}
            size='icon'
            type='submit'
          >
            <Icons.Send className='m-auto' />
          </Button>
        </form>
      </div>
      <AnimatePresence>
        {!bottomVisible && (
          <motion.button
            animate={{ opacity: 1 }}
            className='z-100 bg-background fixed bottom-24 left-0 right-0 mx-auto h-12 w-12 self-center rounded-full border'
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => {
              bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Icons.ArrowBigDown className='m-auto' />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

const MessageContent = memo(({ content }: { content: string }) => {
  return (
    <div
      className='prose prose-slate max-w-xl'
      dangerouslySetInnerHTML={{
        __html: marked.parse(content),
      }}
    />
  );
});

MessageContent.displayName = 'MessageContent';
