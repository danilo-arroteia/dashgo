import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    followCursor: true,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
      
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2022-08-23T00:00:00.0000Z',
      '2022-08-24T00:00:00.0000Z',
      '2022-08-25T00:00:00.0000Z',
      '2022-08-26T00:00:00.0000Z',
      '2022-08-27T00:00:00.0000Z',
      '2022-08-28T00:00:00.0000Z',
      '2022-08-29T00:00:00.0000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
};

const series = [
  { name: 'series1', data: [31, 120, 26, 28, 51, 18, 109]}
]
 
export default function Dashoard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="328px">
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4" >Weekly subscribers</Text>
            <Chart options={options} series={series} type="area" height={160}/>
          </Box>

          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4" >Registration fee</Text>
            <Chart options={options} series={series} type="area" height={160}/>
          </Box>

        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
