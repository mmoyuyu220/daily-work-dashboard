/* 三催处理量 数据源（优检西安小型检测中心 · 已完成催单）· 由 update_ocs_data.py 维护
 * window.OCS_DATA 为全局字典，键为报告日 YYYY-MM-DD（= OCS 创建时间筛选日 T-1）。
 * 每日 9:20 综合看板自动化抓取 OCS 后调用 update_ocs_data.py 追加/替换当日条目。
 * 字段：total=当日催单总量；over1day=处理时长>1天条数；items=明细
 *   （type 催单类型 / no 关联编号 / status 状态 / handler 处理人 /
 *    duration 处理时长原文 / durationSec 处理时长秒数 / updated 更新时间 / over 是否超1天）。
 */
window.OCS_DATA = {
  "2026-08-25": {
    "total": 5,
    "over1day": 0,
    "items": [
      {
        "no": "20260824090949807948",
        "type": "催发货",
        "status": "已完成",
        "handler": "系统",
        "duration": "1小时46分46秒",
        "durationSec": 6406,
        "updated": "2026-08-25 21:42:57",
        "over": false
      },
      {
        "no": "20260823135150809976",
        "type": "催发货",
        "status": "已完成",
        "handler": "系统",
        "duration": "4小时23分21秒",
        "durationSec": 15801,
        "updated": "2026-08-25 21:54:15",
        "over": false
      },
      {
        "no": "20260823095013822947",
        "type": "催质检",
        "status": "已完成",
        "handler": "系统",
        "duration": "2小时5分21秒",
        "durationSec": 7521,
        "updated": "2026-08-25 17:51:08",
        "over": false
      },
      {
        "no": "20260823095550590814",
        "type": "催质检",
        "status": "已完成",
        "handler": "系统",
        "duration": "2小时18分23秒",
        "durationSec": 8303,
        "updated": "2026-08-25 16:07:04",
        "over": false
      },
      {
        "no": "20260823093729703738",
        "type": "催质检",
        "status": "已完成",
        "handler": "系统",
        "duration": "1小时42分32秒",
        "durationSec": 6152,
        "updated": "2026-08-25 12:46:05",
        "over": false
      }
    ]
  }
};
