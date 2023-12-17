

const CharacterChatScreen: React.FC = () => {

    return (
        <section className="w-full h-screen relative z-1">
            <iframe is="x-frame-bypass" src="https://beta.character.ai" className="w-full h-full"></iframe>
        </section>
    )
}

export default CharacterChatScreen;