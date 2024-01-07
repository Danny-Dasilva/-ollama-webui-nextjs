import ChatInput from './chat-input';
import MessagePreview from './message-preview';
import TopMenu from './TopMenu';
import SideNav from './SideNav';

export default function ChatComponent() {
    return (
        <div className="flex bg-[#343541]">
            <SideNav />
            <div className="flex flex-col bg-[#343541] p-4 rounded-lg mx-auto font-sans h-full min-h-screen">
                <TopMenu />

                <div className="flex-grow flex flex-col justify-between">
                    <div></div>
                    <div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <MessagePreview heading="Tell me a fun fact" subheading="about the roman empire" />
                            <MessagePreview heading="Show me a code snippet" subheading="of a website's sticky header" />
                            <MessagePreview heading="Help me study" subheading="vocabulary for a college exam" />
                            <MessagePreview heading="Give me ideas" subheading="for what to do with my kids' art" />
                        </div>
                        <ChatInput />
                    </div>
                </div>
            </div>
        </div>
    );
}