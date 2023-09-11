import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export type ListProps = {
  data: {
    title: string;
    subtitle?: string;
    value: number | string;
    avatarImage?: string;
    avatarFallback: string;
  }[];
};

const List = ({ data }: ListProps): JSX.Element => (
  <div className="flex flex-col gap-6">
    {data.map((t, i) => (
      <div key={`team-${i}`} className="flex items-center">
        <Avatar className="h-10 w-10">
          <AvatarImage src={t.avatarImage} alt={`${t.title} Avatar`} />

          <AvatarFallback>{t.avatarFallback}</AvatarFallback>
        </Avatar>

        <div className="ml-2 flex flex-col gap-1">
          <p className="text-sm font-medium leading-none">{t.title}</p>

          <p className="text-sm">{t.subtitle}</p>
        </div>

        <div className="ml-auto font-medium">{t.value}</div>
      </div>
    ))}
  </div>
);

export default List;
