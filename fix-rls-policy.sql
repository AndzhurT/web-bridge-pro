-- Drop existing policies if any
DROP POLICY IF EXISTS "Allow anon inserts" ON enrollments;
DROP POLICY IF EXISTS "Allow service role inserts" ON enrollments;

-- Create a policy that allows anyone to insert
CREATE POLICY "Enable insert for all users" ON enrollments
  FOR INSERT
  WITH CHECK (true);

-- Optional: Create a policy to allow reading your own submissions (for future admin panel)
CREATE POLICY "Enable read access for all users" ON enrollments
  FOR SELECT
  USING (true);
