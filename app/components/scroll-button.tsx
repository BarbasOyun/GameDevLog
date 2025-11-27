'use client';

interface ScrollToButtonProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  behavior?: 'smooth' | 'auto';
  block?: 'start' | 'center' | 'end' | 'nearest';
}

export default function ScrollToButton({
  targetId,
  children,
  className = 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors',
  behavior = 'smooth',
  block = 'start'
}: ScrollToButtonProps) {
  const handleScroll = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior, block });
    }
  };

  return (
    <button onClick={handleScroll} className={className}>
      {children}
    </button>
  );
}