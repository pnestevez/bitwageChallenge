import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Layout from "@/components/Layout";
import {
  Table as TableComponent,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useSWR from "swr";
import getAppearancesData, {
  TAppearanceData,
} from "@/services/getAppearancesDataData";

export default function Table({
  data: _data,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const { data } = useSWR(
    "/api/stats/appearances",
    (url: string): Promise<TAppearanceData[]> =>
      fetch(url).then((res) => res.json()),
    {
      fallbackData: _data,
    }
  );

  return (
    <Layout title="Table">
      <TableComponent>
        <TableHeader>
          <TableRow>
            <TableHead>FIFA World Cup</TableHead>

            <TableHead>Rival</TableHead>

            <TableHead>Round</TableHead>
            <TableHead className="text-right">Goals</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((m, i) => (
            <TableRow key={`world-cup-match-${i}`}>
              <TableCell>{m.year}</TableCell>

              <TableCell className="font-medium">{m.rival}</TableCell>

              <TableCell>{m.round}</TableCell>

              <TableCell className="text-right">{m.goals}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableCaption>{"Appearances at the FIFA World Cups."}</TableCaption>
      </TableComponent>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<{
  data: TAppearanceData[];
}> = async () => {
  const data = await getAppearancesData();

  return { props: { data } };
};
