function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute w-fit">
      <div className="border-2 rounded-md">{children}</div>
    </div>
  );
}

export default Modal;
