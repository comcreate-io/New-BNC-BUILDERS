// BNC Builders - GoHighLevel (GHL) Webhook Integration

interface GHLWebhookResponse {
  success: boolean;
  error?: string;
}

/**
 * Send contact form data to GoHighLevel via webhook
 * Only sends the exact fields from the contact form
 */
export async function sendContactToGHL(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  isNewCustomer?: string;
  message?: string;
  reason?: string;
}): Promise<GHLWebhookResponse> {
  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn('GHL_WEBHOOK_URL not configured - skipping GHL integration');
    return { success: false, error: 'GHL webhook URL not configured' };
  }

  try {
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      address: data.address || '',
      city: data.city || '',
      state: data.state || '',
      zipCode: data.zipCode || '',
      isNewCustomer: data.isNewCustomer || '',
      message: data.message || '',
      reason: data.reason || '',
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GHL webhook error:', response.status, errorText);
      return { success: false, error: `GHL responded with status ${response.status}` };
    }

    console.log('Successfully sent contact to GHL:', data.email);
    return { success: true };
  } catch (error) {
    console.error('Failed to send to GHL:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Send careers form data to GoHighLevel via webhook
 * Only sends the exact fields from the careers form
 */
export async function sendCareersToGHL(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position?: string;
  experience?: string;
  message?: string;
}): Promise<GHLWebhookResponse> {
  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn('GHL_WEBHOOK_URL not configured - skipping GHL integration');
    return { success: false, error: 'GHL webhook URL not configured' };
  }

  try {
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      position: data.position || '',
      experience: data.experience || '',
      message: data.message || '',
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GHL webhook error:', response.status, errorText);
      return { success: false, error: `GHL responded with status ${response.status}` };
    }

    console.log('Successfully sent careers application to GHL:', data.email);
    return { success: true };
  } catch (error) {
    console.error('Failed to send to GHL:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}
