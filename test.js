import { lanscan } from 'react-native-lanscan'
let lanscan = new lanscan();
lanscan.scan(48500, 48503, 100, true, 20, 100);
lanscan.on('end_pings', () => {
    let connected_hosts = lanscan.getConnectedHosts();
    // connected_hosts = ["192.168.1.10", "192.168.1.15"]
    // if 192.168.1.10 & 192.168.1.15 responded to the pings.
  });
  lanscan.scan(48500, 48503, 100, true, 20, 100);