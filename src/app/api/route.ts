import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        labList: [
            {
                id: 0,
                name: 'Teste 0'
            },
            {
                id: 1,
                name: 'Teste 1'
            },
            {
                id: 2,
                name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est dolore totam enim consectetur. Ad debitis tenetur, id odio dolorem unde nam maiores neque dicta quis dolorum quam at, illo officiis?'
            },
            {
                id: 3,
                name: 'Teste 3'
            },
            {
                id: 4,
                name: 'Teste 4'
            },
            {
                id: 5,
                name: 'Teste 5'
            },
            {
                id: 6,
                name: 'Teste 6'
            },
            {
                id: 7,
                name: 'Teste 7'
            },
            {
                id: 8,
                name: 'Teste 8'
            },
            {
                id: 9,
                name: 'Teste 9'
            },
            {
                id: 10,
                name: 'Teste 10'
            },
            {
                id: 11,
                name: 'Teste 11'
            },
        ]
    }
    );
}