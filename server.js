import http from 'http';

const users = []; // ذاكرة مؤقتة

http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html dir="rtl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>تعرّف</title>
        <style>
          body { font-family: system-ui; background: #f4f6fb; text-align: center; padding: 50px; }
          .box { background: white; padding: 30px; border-radius: 15px; max-width: 400px; margin: auto; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
          input, button { width: 100%; padding: 12px; margin: 10px 0; border-radius: 8px; border: 1px solid #ddd; box-sizing: border-box; font-family: inherit; }
          button { background: #e91e63; color: white; border: none; font-weight: bold; cursor: pointer; }
        </style>
      </head>
      <body>
        <div class="box">
          <h2>مرحباً بك في منصة تعارف</h2>
          <p>النسخة التجريبية</p>
          <form action="/register" method="POST">
            <input name="name" placeholder="اسمك" required>
            <input name="email" placeholder="بريدك" required>
            <button type="submit">تسجيل</button>
          </form>
        </div>
      </body>
      </html>
    `);
  } else if (req.url === '/register' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<h1 style="text-align:center;margin-top:50px;">تم التسجيل بنجاح!</h1><p style="text-align:center;"><a href="/">عودة</a></p>`);
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
}).listen(3000, () => console.log('Server running on port 3000'));
