from browser_use import Agent, ChatOpenAI, BrowserSession, BrowserProfile
import asyncio
from dotenv import load_dotenv
load_dotenv()

async def main():
    browser_session = BrowserSession(
        browser_profile=BrowserProfile(
            headless=False,
            viewport={"width": 1920, "height": 1080},
        )
    )
    agent = Agent(
        task="""
        1. http://localhost:5174 にアクセスして
        2. 「回答ページ」へ遷移して
        3. 「3」と表示されているボタンをクリック
        4. 「回答」ボタンを押して
        5. 遷移したページに書いてある文字を教えて
        """,
        llm=ChatOpenAI(model="gpt-4o-mini"),
    )
    result = await agent.run()
    print(result)

asyncio.run(main())
