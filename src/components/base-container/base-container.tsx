export const BaseContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="mx-auto px-4 md:px-12 max-w-[76rem]">
            {children}
        </section>
    );
};
