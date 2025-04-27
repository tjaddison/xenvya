import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

// Initialize DynamoDB client
const client = new DynamoDBClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
  }
});

const docClient = DynamoDBDocumentClient.from(client);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }
    
    // Create item for DynamoDB
    const contactItem = {
      id: uuidv4(),
      name: body.name,
      email: body.email,
      message: body.message,
      timestamp: body.timestamp || new Date().toISOString(),
      status: 'new'
    };
    
    // Save to DynamoDB
    await docClient.send(
      new PutCommand({
        TableName: process.env.DYNAMODB_TABLE_NAME || 'xenvya-contacts',
        Item: contactItem
      })
    );
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json(
      { error: 'Failed to save contact information' },
      { status: 500 }
    );
  }
} 