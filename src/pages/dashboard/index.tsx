import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Image from "next/image";
import Layout from "@/components/Layout";
import Chart from "@/components/Chart";
import List from "@/components/List";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Goal, Send, Ticket } from "lucide-react";
import useSWR from "swr";
import getOverviewData, { TOverviewData } from "@/services/getOverviewData";

export default function Dashboard({
  data: _data,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const { data } = useSWR(
    "/api/stats/overview",
    (url: string): Promise<TOverviewData> =>
      fetch(url).then((res) => res.json()),
    {
      fallbackData: _data,
    }
  );

  return (
    <Layout title="Dashboard">
      <div className="grid grid-cols-6 gap-6">
        <Card className="col-span-6 md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Goals</CardTitle>

            <Goal className="w-6 h-6" />
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold">{data.goals}</div>

            <p className="text-xs">{`Ratio ${data.goalRatio}`}</p>
          </CardContent>
        </Card>

        <Card className="col-span-6 sm:col-span-3 md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Assists</CardTitle>

            <Send className="w-6 h-6" />
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold">{data.assists}</div>

            <p className="text-xs">{`Ratio ${data.assistRatio}`}</p>
          </CardContent>
        </Card>

        <Card className="col-span-6 sm:col-span-3 md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Matches</CardTitle>

            <Ticket className="w-6 h-6" />
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold">{data.matches}</div>
          </CardContent>
        </Card>

        <Card className="col-span-6 md:col-span-4">
          <CardHeader>
            <CardTitle>Seasons</CardTitle>
          </CardHeader>

          <CardContent>
            <Chart
              data={data.goalsPerSeason}
              xDataKey="season"
              lineDataKeys={[{ key: "goals", color: "#000000" }]}
            />
          </CardContent>
        </Card>

        <Card className="col-span-6 md:col-span-2">
          <CardHeader>
            <CardTitle>Teams</CardTitle>
          </CardHeader>

          <CardContent>
            <List data={data.goalsPerTeam} />
          </CardContent>
        </Card>

        <Card className="col-span-6">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-sm">{data.overview}</p>
          </CardContent>
        </Card>

        {data.stadium && (
          <Card className="col-span-6">
            <CardHeader>
              <CardTitle>Satdium</CardTitle>
            </CardHeader>

            <CardContent>
              <Image
                src={data.stadium}
                alt="Stadium"
                width={990}
                height={330}
                className="rounded-lg"
              />
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<{
  data: TOverviewData;
}> = async () => {
  const data = await getOverviewData();

  return { props: { data } };
};
