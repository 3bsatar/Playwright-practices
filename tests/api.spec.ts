import { expect , test} from '@playwright/test';

test('get api', async({request})=>{
    const startingTime = Date.now();
    const response = await request.get("https://api.restful-api.dev/objects");
    let responseBody = await response.json();
    let responseHeader = response.headers();
    console.log(responseBody);
    expect(response.status()).toBe(200);
    expect(responseBody[0].id).toBe('1');
    console.log(responseHeader);
    expect(responseHeader['content-type']).toContain('application/json');
    let responseSize = (await response.body()).byteLength;
    expect(responseSize).toBeLessThan(4000);
    let responseTime = Date.now() - startingTime;
    console.log(responseTime);
    expect(responseTime).toBeLessThan(2000);
});