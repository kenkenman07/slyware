from browser_use import Agent, ChatOpenAI, BrowserSession, BrowserProfile, SystemPrompt
import asyncio
from dotenv import load_dotenv
load_dotenv()

class MySystemPrompt(SystemPrompt):
	def important_rules(self) -> str:
		existing_rules = super().important_rules()
		new_rules = '「回答ページ」では、ページ遷移してから5.8秒後に広告がポップアップ表示されるから気を付けること。'
		return f'{existing_rules}\n{new_rules}'

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
            system_prompt_class=MySystemPrompt,
            browser_session=browser_session
        )
        result = await agent.run(max_steps=7)
        print(result)

asyncio.run(main())
