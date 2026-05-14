from flask import Flask, request, jsonify

app = Flask(__name__)

# 模拟数据
orders = [{"id": i, "order_number": f"ORD{i}", "total_amount": 100*i, "created_at": "2025-01-01", "updated_at": "2025-01-01"} for i in range(1, 250)]

@app.route('/api/orders', methods=['GET'])
def get_orders():
    token = request.headers.get('Authorization', '').replace('Bearer ', '')
    if token != 'test_token':
        return jsonify({"error": "Unauthorized"}), 401
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get('page_size', 10))
    start = (page-1)*page_size
    end = start + page_size
    return jsonify({
        "results": orders[start:end],
        "next_page": page+1 if end < len(orders) else None
    })

if __name__ == '__main__':
    app.run(port=5000)