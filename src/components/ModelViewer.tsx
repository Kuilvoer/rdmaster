export default function ModelViewer({ alt, className }: { alt: string, className?: string }) {
    return (
        <div className={`flex items-center justify-center bg-muted border-2 border-dashed border-muted-foreground/20 rounded-xl p-8 text-muted-foreground ${className}`}>
            <div className="text-center">
                <p className="font-bold mb-2">Image Placeholder</p>
                <p className="text-sm">"{alt}"</p>
            </div>
        </div>
    )
}
