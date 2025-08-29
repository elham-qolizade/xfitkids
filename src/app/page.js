import BatchChartBox from "./_components/BatchChartBox";
import CounterBox from "./_components/CounterBox";
import Header from "./_components/Header";
import PerformerBox from "./_components/PerformerBox";
import RevenueChartBox from "./_components/RevenueChartBox";
import StatusBox from "./_components/StatusBox";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center px-10 gap-11">
      <Header />
      <CounterBox />
      <div className="w-full grid grid-cols-2 gap-8 mb-8">
        <StatusBox />
        <BatchChartBox />
        <RevenueChartBox />
        <PerformerBox />
      </div>
    </div>
  );
}
