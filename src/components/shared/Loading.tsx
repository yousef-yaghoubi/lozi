function Loading() {
  return (
    <div className="relative w-[164px] h-[100px] mx-auto">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-[10px] h-[30px] bg-primary rounded-[5px] animate-loader"
          style={{
            left: `${i * 20}px`,
            animationDelay: `${i * 0.05}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Loading;
