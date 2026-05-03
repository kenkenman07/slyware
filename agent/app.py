from browser_use import Agent, ChatOpenAI, BrowserSession, BrowserProfile
import asyncio
from dotenv import load_dotenv
load_dotenv()

async def main():
    for i in range(10):
        browser_session = BrowserSession(
            browser_profile=BrowserProfile(
                headless=True,
                #viewport={"width": 1920, "height": 1080},
            )
        )
        agent = Agent(
            task="""
            1. http://host.docker.internal:5174/ にアクセスして
            2. 「回答ページ」へ遷移して
            3. 「3」と表示されているボタンをクリック
            4. 「回答」ボタンを押して
            5. 遷移したページに書いてある文字を教えて
            """,
            llm=ChatOpenAI(model="gpt-4o-mini", temperature=1),
            browser_session=browser_session
        )
        result = await agent.run(max_steps=7)
        print(result)

asyncio.run(main())
