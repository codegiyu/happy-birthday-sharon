// Global type declarations

export {}

declare global {
    interface ScreensSlice {
        currentScreen: string;
        countdownDueDate: [number, number, number, number, number];
        // timeLeft: TimeBreakdown;
        // setTimeLeft: (newTime: TimeBreakdown) => void;
        setCurrentScreen: (screen: string) => void;
    }

    type AppStoreState = ScreensSlice

    interface PrimaryButtonProps {
        type: string,
        fullWidth: boolean,
        clickHandler: (e?: React.MouseEvent<HTMLButtonElement>) => void,
        text: string,
        styles: CSSProperties | undefined,
        textStyles: CSSProperties | undefined,
    }

    interface TimeBreakdown {
        hours: string;
        minutes: string;
        seconds: string;
    }
}