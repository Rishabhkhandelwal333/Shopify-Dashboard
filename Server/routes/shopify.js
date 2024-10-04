import express from 'express';
import axios from 'axios';

const router = express.Router();

// Fetch Shopify Orders
router.get('/orders', async (req, res) => {
  try {
    const { data } = await axios.get(process.env.SHOPIFY_STORE_URL, {
      headers: {
        'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
      },
    });

    const totalOrders = data.orders.length;
    const totalSales = data.orders.reduce((acc, order) => acc + parseFloat(order.total_price), 0);

    res.json({
      totalOrders,
      totalSales,
      conversionRate: (totalOrders / 100) * 100,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
});

export default router;
