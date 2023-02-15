interface ButtonProps {
  link: string;
  text: string;
  className: string;
}

export const Button = ({ link, text, className }: ButtonProps) => {
  return (
    <a href={link} className={className}>
      {text}
    </a>
  );
};