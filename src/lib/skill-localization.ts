import type { MarketplaceSkill, Skill } from '@/types/skill';

type SkillText = {
  name: string;
  description: string;
};

const SKILL_TEXT_ZH: Record<string, SkillText> = {
  '1password': {
    name: '1Password 密码管理',
    description: '通过 1Password 命令行工具读取和使用密码、密钥等安全凭据。',
  },
  'apple-notes': {
    name: '苹果备忘录',
    description: '管理 Apple Notes 备忘录，支持创建、查看、编辑、删除、搜索、移动和导出。',
  },
  'apple-reminders': {
    name: '苹果提醒事项',
    description: '管理 Apple Reminders 提醒事项，支持列表、日期筛选、创建、编辑、完成和删除。',
  },
  'bear-notes': {
    name: 'Bear 笔记',
    description: '创建、搜索和管理 Bear 笔记。',
  },
  blogwatcher: {
    name: '博客监测',
    description: '跟踪博客和网站更新，并整理为可读摘要。',
  },
  blucli: {
    name: '蓝牙控制',
    description: '通过命令行查看和管理蓝牙设备。',
  },
  bluebubbles: {
    name: 'iMessage 网关',
    description: '通过 BlueBubbles 连接和管理 iMessage 消息。',
  },
  camsnap: {
    name: '摄像头截图',
    description: '调用本机摄像头拍摄图片，用于视觉检查和记录。',
  },
  canvas: {
    name: 'Canvas 教学平台',
    description: '查看和管理 Canvas 课程、作业、公告和学习内容。',
  },
  clawhub: {
    name: '技能市场',
    description: '搜索、安装和管理来自技能市场的扩展能力。',
  },
  'coding-agent': {
    name: '代码助手',
    description: '辅助阅读、修改和验证代码项目。',
  },
  discord: {
    name: 'Discord',
    description: '连接 Discord，用于读取和发送频道消息。',
  },
  eightctl: {
    name: '本机控制',
    description: '执行常见本机操作和系统控制命令。',
  },
  gemini: {
    name: 'Gemini',
    description: '连接 Gemini 模型和相关工具能力。',
  },
  'gh-issues': {
    name: 'GitHub 问题管理',
    description: '查看、搜索、创建和更新 GitHub Issues。',
  },
  gifgrep: {
    name: 'GIF 检索',
    description: '在 GIF 或视频片段中检索画面和文字线索。',
  },
  github: {
    name: 'GitHub',
    description: '处理 GitHub 仓库、提交、分支、Issue 和 Pull Request。',
  },
  gog: {
    name: 'GOG 游戏库',
    description: '查询和管理 GOG 游戏库相关信息。',
  },
  goplaces: {
    name: '地点搜索',
    description: '搜索地点、路线和本地信息。',
  },
  healthcheck: {
    name: '健康检查',
    description: '检查本机工具、环境和服务是否可用。',
  },
  himalaya: {
    name: '邮件管理',
    description: '通过命令行读取、搜索和发送电子邮件。',
  },
  imsg: {
    name: 'iMessage',
    description: '读取和发送 iMessage 消息。',
  },
  mcporter: {
    name: 'Minecraft 工具',
    description: '处理 Minecraft 资源、存档或服务相关任务。',
  },
  'model-usage': {
    name: '模型用量',
    description: '查看模型调用、Token 和成本用量。',
  },
  'nano-pdf': {
    name: 'PDF 轻量处理',
    description: '快速读取、拆分、合并和处理 PDF 文件。',
  },
  'node-connect': {
    name: 'Node 连接器',
    description: '连接 Node.js 脚本或服务以扩展自动化能力。',
  },
  notion: {
    name: 'Notion',
    description: '搜索、读取和管理 Notion 页面与数据库。',
  },
  obsidian: {
    name: 'Obsidian',
    description: '搜索、创建和管理 Obsidian 笔记库内容。',
  },
  'openai-whisper': {
    name: '语音转文字',
    description: '使用本地 Whisper 能力转写音频。',
  },
  'openai-whisper-api': {
    name: '语音转文字 API',
    description: '通过 API 将音频转写为文本。',
  },
  openhue: {
    name: '智能灯光',
    description: '控制 Philips Hue 等智能灯光设备。',
  },
  oracle: {
    name: 'Oracle 数据库',
    description: '连接和查询 Oracle 数据库。',
  },
  ordercli: {
    name: '订单工具',
    description: '查询、整理和处理订单数据。',
  },
  peekaboo: {
    name: '屏幕查看',
    description: '查看屏幕、窗口和应用界面，辅助桌面自动化。',
  },
  sag: {
    name: '搜索增强',
    description: '提供搜索、检索和归纳辅助能力。',
  },
  'session-logs': {
    name: '会话日志',
    description: '查看和整理会话日志，便于排查问题。',
  },
  'sherpa-onnx-tts': {
    name: '本地语音合成',
    description: '使用本地语音合成模型生成语音。',
  },
  'skill-creator': {
    name: '技能创建器',
    description: '帮助创建和维护新的技能扩展。',
  },
  slack: {
    name: 'Slack',
    description: '连接 Slack，用于读取和发送消息。',
  },
  songsee: {
    name: '音乐识别',
    description: '识别歌曲、歌词或音乐相关信息。',
  },
  sonoscli: {
    name: 'Sonos 音箱',
    description: '控制 Sonos 音箱播放、暂停、音量和曲目。',
  },
  'spotify-player': {
    name: 'Spotify 播放器',
    description: '控制 Spotify 播放、搜索音乐和管理播放列表。',
  },
  summarize: {
    name: '内容总结',
    description: '对文档、网页或长文本进行摘要和提炼。',
  },
  taskflow: {
    name: '任务流程',
    description: '创建、跟踪和推进多步骤任务流程。',
  },
  'taskflow-inbox-triage': {
    name: '收件箱整理',
    description: '整理任务收件箱，分类、优先级排序并生成下一步行动。',
  },
  'things-mac': {
    name: 'Things 任务管理',
    description: '管理 Things 待办事项、项目和清单。',
  },
  tmux: {
    name: '终端会话',
    description: '管理 tmux 终端会话和窗口。',
  },
  trello: {
    name: 'Trello',
    description: '管理 Trello 看板、列表和卡片。',
  },
  'video-frames': {
    name: '视频抽帧',
    description: '从视频中提取关键帧，用于分析和检查。',
  },
  'voice-call': {
    name: '语音通话',
    description: '处理语音通话相关的连接和自动化任务。',
  },
  wacli: {
    name: 'WhatsApp',
    description: '通过 WhatsApp 命令行能力收发消息。',
  },
  weather: {
    name: '天气查询',
    description: '查询天气、预报和气象信息。',
  },
  xurl: {
    name: '链接处理',
    description: '解析、打开、转换和检查链接。',
  },
  docx: {
    name: 'Word 文档处理',
    description: '读取、编辑和生成 Word 文档。',
  },
  xlsx: {
    name: 'Excel 表格处理',
    description: '读取、分析、编辑和生成 Excel 表格。',
  },
  pdf: {
    name: 'PDF 文档处理',
    description: '读取、分析、拆分、合并和生成 PDF 文件。',
  },
  pptx: {
    name: 'PPT 演示文稿处理',
    description: '读取、编辑和生成 PowerPoint 演示文稿。',
  },
  'find-skills': {
    name: '技能查找',
    description: '根据任务需求查找合适的技能扩展。',
  },
  'self-improving-agent': {
    name: '自我改进助手',
    description: '记录经验并沉淀可复用的工作方法。',
  },
  'tavily-search': {
    name: '联网搜索',
    description: '使用 Tavily 进行联网搜索和资料检索。',
  },
};

function normalizeKey(value: string | undefined): string {
  return (value || '').trim().toLowerCase();
}

function getSkillText(id?: string, slug?: string, name?: string): SkillText | undefined {
  const candidates = [id, slug, name].map(normalizeKey).filter(Boolean);
  for (const key of candidates) {
    if (SKILL_TEXT_ZH[key]) return SKILL_TEXT_ZH[key];
  }
  return undefined;
}

export function getLocalizedSkill(skill: Skill): Skill {
  const text = getSkillText(skill.id, skill.slug, skill.name);
  if (!text) return skill;
  return {
    ...skill,
    name: text.name,
    description: text.description,
  };
}

export function getLocalizedMarketplaceSkill(skill: MarketplaceSkill): MarketplaceSkill {
  const text = getSkillText(skill.slug, skill.slug, skill.name);
  if (!text) return skill;
  return {
    ...skill,
    name: text.name,
    description: text.description,
  };
}

export function getSkillSearchText(skill: Skill): string {
  const localized = getLocalizedSkill(skill);
  return [
    skill.name,
    skill.description,
    skill.id,
    skill.slug,
    skill.author,
    localized.name,
    localized.description,
  ].filter(Boolean).join(' ').toLowerCase();
}
