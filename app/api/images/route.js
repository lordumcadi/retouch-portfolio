import { NextResponse } from 'next/server';

export async function GET() {
  const imagePairs = [
    {
      before: '/images/1/before.jpg',
      after: '/images/1/after.jpg',
      folder: '1'
    },
    {
      before: '/images/2/before.jpg',
      after: '/images/2/after.jpg',
      folder: '2'
    },
    {
      before: '/images/3/before.jpg',
      after: '/images/3/after.jpg',
      folder: '3'
    },
    {
      before: '/images/4/before.jpg',
      after: '/images/4/after.jpg',
      folder: '4'
    },
    {
      before: '/images/5/before.jpg',
      after: '/images/5/after.jpg',
      folder: '5'
    },
    {
      before: '/images/6/before.jpg',
      after: '/images/6/after.jpg',
      folder: '6'
    },
    {
      before: '/images/7/before.jpg',
      after: '/images/7/after.jpg',
      folder: '7'
    },
    {
      before: '/images/8/before.jpg',
      after: '/images/8/after.jpg',
      folder: '8'
    },
    {
      before: '/images/9/before.jpg',
      after: '/images/9/after.jpg',
      folder: '9'
    },
    {
      before: '/images/10/before.jpg',
      after: '/images/10/after.jpg',
      folder: '10'
    },
    {
      before: '/images/11/before.jpg',
      after: '/images/11/after.jpg',
      folder: '11'
    },
    {
      before: '/images/12/before.jpg',
      after: '/images/12/after.jpg',
      folder: '12'
    },
    {
      before: '/images/13/before.jpg',
      after: '/images/13/after.jpg',
      folder: '13'
    },
    {
      before: '/images/14/before.jpg',
      after: '/images/14/after.jpg',
      folder: '14'
    },
    {
      before: '/images/15/before.jpg',
      after: '/images/15/after.jpg',
      folder: '15'
    },
    {
      before: '/images/16/before.jpg',
      after: '/images/16/after.jpg',
      folder: '16'
    },
    {
      before: '/images/17/before.jpg',
      after: '/images/17/after.jpg',
      folder: '17'
    },
    {
      before: '/images/19/before.jpg',
      after: '/images/19/after.jpg',
      folder: '19'
    },
    {
      before: '/images/20/before.jpg',
      after: '/images/20/after.jpg',
      folder: '20'
    },
    {
      before: '/images/21/before.jpg',
      after: '/images/21/after.jpg',
      folder: '21'
    },
    {
      before: '/images/22/before.jpg',
      after: '/images/22/after.jpg',
      folder: '22'
    },
    {
      before: '/images/23/before.jpg',
      after: '/images/23/after.jpg',
      folder: '23'
    },
    {
      before: '/images/24/before.jpg',
      after: '/images/24/after.jpg',
      folder: '24'
    },
    {
      before: '/images/25/before.jpg',
      after: '/images/25/after.jpg',
      folder: '25'
    },
    {
      before: '/images/26/before.jpg',
      after: '/images/26/after.jpg',
      folder: '26'
    },
    {
      before: '/images/27/before.jpg',
      after: '/images/27/after.jpg',
      folder: '27'
    },
    {
      before: '/images/28/before.jpg',
      after: '/images/28/after.jpg',
      folder: '28'
    },
    {
      before: '/images/29/before.jpg',
      after: '/images/29/after.jpg',
      folder: '29'
    },
    {
      before: '/images/30/before.jpg',
      after: '/images/30/after.jpg',
      folder: '30'
    },
    {
      before: '/images/31/before.jpg',
      after: '/images/31/after.jpg',
      folder: '31'
    },
    {
      before: '/images/32/before.jpg',
      after: '/images/32/after.jpg',
      folder: '32'
    },
    {
      before: '/images/33/before.jpg',
      after: '/images/33/after.jpg',
      folder: '33'
    },
    {
      before: '/images/34/before.jpg',
      after: '/images/34/after.jpg',
      folder: '34'
    },
    {
      before: '/images/35/before.jpg',
      after: '/images/35/after.jpg',
      folder: '35'
    },
    {
      before: '/images/36/before.jpg',
      after: '/images/36/after.jpg',
      folder: '36'
    },
    {
      before: '/images/37/before.jpg',
      after: '/images/37/after.jpg',
      folder: '37'
    },
    {
      before: '/images/39/before.jpg',
      after: '/images/39/after.jpg',
      folder: '39'
    },
    {
      before: '/images/40/before.jpg',
      after: '/images/40/after.jpg',
      folder: '40'
    },
    {
      before: '/images/41/before.jpg',
      after: '/images/41/after.jpg',
      folder: '41'
    },
    {
      before: '/images/42/before.jpg',
      after: '/images/42/after.jpg',
      folder: '42'
    },
    {
      before: '/images/43/before.jpg',
      after: '/images/43/after.jpg',
      folder: '43'
    },
    {
      before: '/images/44/before.jpg',
      after: '/images/44/after.jpg',
      folder: '44'
    },
    {
      before: '/images/45/before.jpg',
      after: '/images/45/after.jpg',
      folder: '45'
    },
    {
      before: '/images/46/before.jpg',
      after: '/images/46/after.jpg',
      folder: '46'
    },
    {
      before: '/images/47/before.jpg',
      after: '/images/47/after.jpg',
      folder: '47'
    },
    {
      before: '/images/48/before.jpg',
      after: '/images/48/after.jpg',
      folder: '48'
    },
    {
      before: '/images/49/before.jpg',
      after: '/images/49/after.jpg',
      folder: '49'
    },
    {
      before: '/images/50/before.jpg',
      after: '/images/50/after.jpg',
      folder: '50'
    },
    {
      before: '/images/51/before.jpg',
      after: '/images/51/after.jpg',
      folder: '51'
    },
    {
      before: '/images/52/before.jpg',
      after: '/images/52/after.jpg',
      folder: '52'
    },
    {
      before: '/images/53/before.jpg',
      after: '/images/53/after.jpg',
      folder: '53'
    },
    {
      before: '/images/54/before.jpg',
      after: '/images/54/after.jpg',
      folder: '54'
    },
    {
      before: '/images/55/before.jpg',
      after: '/images/55/after.jpg',
      folder: '55'
    },
    {
      before: '/images/56/before.jpg',
      after: '/images/56/after.jpg',
      folder: '56'
    },
    {
      before: '/images/57/before.jpg',
      after: '/images/57/after.jpg',
      folder: '57'
    },
    {
      before: '/images/59/before.jpg',
      after: '/images/59/after.jpg',
      folder: '59'
    },
    {
      before: '/images/60/before.jpg',
      after: '/images/60/after.jpg',
      folder: '60'
    }
  ];

  return NextResponse.json(imagePairs);
} 