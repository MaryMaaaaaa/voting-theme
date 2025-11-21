# 部署指南 - 投票主题网站

## 🎉 恭喜！代码已经改造完成

现在您的网站已经可以：
- ✅ 所有人共享同一个数据库
- ✅ 图片上传到云端存储
- ✅ 实时同步投票结果
- ✅ 刷新页面数据不丢失

---

## 📋 第一步：本地测试（可选）

在部署到网上之前，可以先在本地测试一下：

```bash
npm run dev
```

然后打开浏览器访问显示的地址（通常是 `http://localhost:5173`），尝试：
1. 上传一张作品
2. 给作品投票
3. 刷新页面，看数据是否还在

---

## 🚀 第二步：部署到 Vercel（免费）

### 2.1 准备 GitHub 仓库

1. **打开 GitHub 网站**：https://github.com
2. **登录**（如果没账号就注册一个）
3. **创建新仓库**：
   - 点击右上角的 `+` 号，选择 `New repository`
   - Repository name: 随便填，比如 `voting-theme`
   - 选择 `Public`（公开）
   - 点击 `Create repository`

4. **上传代码到 GitHub**（在终端执行）：

```bash
cd "/Users/JieMa/Downloads/Voting for theme"

# 初始化 git（如果还没有的话）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit with Supabase integration"

# 连接到你的 GitHub 仓库（把下面的网址换成你自己的）
git remote add origin https://github.com/你的用户名/voting-theme.git

# 上传
git branch -M main
git push -u origin main
```

### 2.2 在 Vercel 部署

1. **打开 Vercel 网站**：https://vercel.com
2. **用 GitHub 账号登录**（点击 "Continue with GitHub"）
3. **点击 "Add New..." → "Project"**
4. **导入你的仓库**：
   - 找到刚才创建的 `voting-theme` 仓库
   - 点击 `Import`
5. **配置项目**：
   - Project Name: 保持默认或自己改
   - Framework Preset: 应该自动检测到 `Vite`
   - Root Directory: 保持默认 `./`
   - **不需要添加环境变量**（我们已经把 Supabase 配置写在代码里了）
6. **点击 "Deploy"**
7. **等待 2-3 分钟**，部署完成后会给你一个网址，类似：
   ```
   https://voting-theme-xxxx.vercel.app
   ```

---

## ✨ 第三步：分享给朋友

把 Vercel 给你的网址发给朋友，他们就能：
- 看到所有人上传的作品
- 上传自己的作品
- 投票给喜欢的作品
- 实时看到投票数变化

---

## 🔧 后续维护

### 修改代码后重新部署
每次改完代码，只需要：

```bash
git add .
git commit -m "描述你改了什么"
git push
```

Vercel 会自动检测到更新并重新部署，不需要任何额外操作！

### 查看数据库
1. 登录 Supabase：https://supabase.com
2. 选择你的项目
3. 点击左侧 "Table Editor"，可以看到所有上传的作品数据
4. 点击左侧 "Storage"，可以看到所有上传的图片

---

## ⚠️ 注意事项

1. **免费额度**：
   - Supabase 免费版：500MB 数据库 + 1GB 存储
   - Vercel 免费版：100GB 流量/月
   - 对于小型投票项目完全够用

2. **安全提示**：
   - 目前任何人都可以上传和删除（因为是投票活动）
   - 如果需要更严格的权限控制，可以再优化 Supabase 的安全策略

3. **性能**：
   - 图片会自动优化并通过 CDN 分发
   - 支持实时同步，多人同时投票不会冲突

---

## 🎊 完成！

现在你的投票网站已经完全上线，可以分享给全世界了！

有问题随时问我 😊

