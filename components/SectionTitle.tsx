export default function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="text-3xl font-bold text-white">{children}</h2>
      <div className="w-16 h-1 mt-2 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#22D3EE]" />
    </div>
  );
}
