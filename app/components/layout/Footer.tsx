export default function Footer()
{
    return (
        <footer className="w-full py-6 px-8 mt-auto">
            <div className="max-w-7x1 mx-auto text-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} JM. All rights reserved.
                </p>
            </div>
        </footer>
    );
}