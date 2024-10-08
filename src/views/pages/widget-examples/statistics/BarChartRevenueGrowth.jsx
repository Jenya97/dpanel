'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))
const series = [{ data: [32, 52, 72, 94, 116, 94, 72] }]

const BarChartRevenueGrowth = () => {
  // Hook
  const theme = useTheme()

  // Vars
  const successColorWithOpacity = 'var(--mui-palette-success-lightOpacity)'

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        distributed: true,
        columnWidth: '48%'
      }
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: [
      successColorWithOpacity,
      successColorWithOpacity,
      successColorWithOpacity,
      successColorWithOpacity,
      'var(--mui-palette-success-main)',
      successColorWithOpacity,
      successColorWithOpacity
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      show: false,
      padding: {
        top: -15,
        left: 0,
        right: 0,
        bottom: -5
      }
    },
    xaxis: {
      categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      axisTicks: { show: false },
      axisBorder: { show: false },
      tickPlacement: 'on',
      labels: {
        style: {
          colors: 'var(--mui-palette-text-disabled)',
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.body2.fontSize
        }
      }
    },
    yaxis: { show: false },
    responsive: [
      {
        breakpoint: 1335,
        options: {
          chart: {
            width: 150
          },
          plotOptions: {
            bar: { columnWidth: '55%' }
          }
        }
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            width: 190
          }
        }
      },
      {
        breakpoint: 410,
        options: {
          chart: {
            width: 150
          },
          plotOptions: {
            bar: { columnWidth: '60%' }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardContent className='flex justify-between gap-4'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col gap-y-2'>
            <Typography variant='h5'>Revenue Growth</Typography>
            <Typography>Weekly Report</Typography>
          </div>
          <div className='flex flex-col gap-y-2 items-start'>
            <Typography variant='h3'>$4,673</Typography>
            <Chip variant='tonal' size='small' color='success' label='+15.2%' />
          </div>
        </div>
        <AppReactApexCharts type='bar' width={190} height={172} series={series} options={options} />
      </CardContent>
    </Card>
  )
}

export default BarChartRevenueGrowth
